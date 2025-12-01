/**
 * Advanced gesture handling for Fractal Explorer
 * - Double tap to zoom
 * - Long press for context menu
 * - Smooth inertia scrolling
 */

class GestureHandler {
    constructor(element, callbacks) {
        this.element = element;
        this.callbacks = callbacks;
        
        // Double tap detection
        this.lastTap = 0;
        this.doubleTapDelay = 300;
        
        // Long press detection
        this.longPressTimer = null;
        this.longPressDelay = 500;
        this.longPressTriggered = false;
        
        // Inertia
        this.velocity = { x: 0, y: 0 };
        this.lastMove = { x: 0, y: 0, time: 0 };
        this.inertiaAnimation = null;
        
        this.init();
    }
    
    init() {
        this.element.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        this.element.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        this.element.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: false });
        
        // Mouse double click
        this.element.addEventListener('dblclick', this.onDoubleClick.bind(this));
    }
    
    onTouchStart(e) {
        // Cancel inertia
        if (this.inertiaAnimation) {
            cancelAnimationFrame(this.inertiaAnimation);
            this.inertiaAnimation = null;
        }
        
        const touch = e.touches[0];
        const now = Date.now();
        
        // Double tap detection
        if (e.touches.length === 1) {
            if (now - this.lastTap < this.doubleTapDelay) {
                e.preventDefault();
                this.onDoubleTap(touch.clientX, touch.clientY);
                this.lastTap = 0;
                return;
            }
            this.lastTap = now;
            
            // Start long press timer
            this.longPressTriggered = false;
            this.longPressTimer = setTimeout(() => {
                this.longPressTriggered = true;
                if (this.callbacks.onLongPress) {
                    this.callbacks.onLongPress(touch.clientX, touch.clientY);
                }
            }, this.longPressDelay);
        }
        
        this.lastMove = {
            x: touch.clientX,
            y: touch.clientY,
            time: now
        };
    }
    
    onTouchMove(e) {
        // Cancel long press on move
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
        
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const now = Date.now();
            const dt = now - this.lastMove.time;
            
            if (dt > 0) {
                this.velocity = {
                    x: (touch.clientX - this.lastMove.x) / dt,
                    y: (touch.clientY - this.lastMove.y) / dt
                };
            }
            
            this.lastMove = {
                x: touch.clientX,
                y: touch.clientY,
                time: now
            };
        }
    }
    
    onTouchEnd(e) {
        // Cancel long press
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
        
        // Start inertia if velocity is significant
        if (e.touches.length === 0 && !this.longPressTriggered) {
            const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
            if (speed > 0.1 && this.callbacks.onInertia) {
                this.startInertia();
            }
        }
    }
    
    onDoubleTap(x, y) {
        if (this.callbacks.onDoubleTap) {
            this.callbacks.onDoubleTap(x, y);
        }
    }
    
    onDoubleClick(e) {
        this.onDoubleTap(e.clientX, e.clientY);
    }
    
    startInertia() {
        const friction = 0.95;
        const minVelocity = 0.01;
        
        const animate = () => {
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            
            const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
            
            if (speed > minVelocity) {
                if (this.callbacks.onInertia) {
                    this.callbacks.onInertia(this.velocity.x * 16, this.velocity.y * 16);
                }
                this.inertiaAnimation = requestAnimationFrame(animate);
            }
        };
        
        this.inertiaAnimation = requestAnimationFrame(animate);
    }
}

// Export for use
if (typeof module !== 'undefined') {
    module.exports = GestureHandler;
}

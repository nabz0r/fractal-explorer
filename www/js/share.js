/**
 * Share functionality for Fractal Explorer
 * Share fractals via Web Share API or fallback
 */

const FractalShare = {
    
    // Check if Web Share API is available
    canShare() {
        return 'share' in navigator;
    },
    
    // Check if can share files
    canShareFiles() {
        return 'share' in navigator && 'canShare' in navigator;
    },
    
    // Share fractal image
    async shareImage(canvas, title = 'My Fractal') {
        try {
            const blob = await new Promise(resolve => {
                canvas.toBlob(resolve, 'image/png');
            });
            
            const file = new File([blob], 'fractal.png', { type: 'image/png' });
            
            if (this.canShareFiles() && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: title,
                    text: 'Check out this fractal I made with Fractal Explorer!',
                    files: [file]
                });
                return { success: true, method: 'native' };
            } else if (this.canShare()) {
                // Share without file
                await navigator.share({
                    title: title,
                    text: 'Check out Fractal Explorer - an interactive fractal app!',
                    url: window.location.href
                });
                return { success: true, method: 'link' };
            } else {
                // Fallback: download
                this.downloadImage(canvas, title);
                return { success: true, method: 'download' };
            }
        } catch (err) {
            if (err.name === 'AbortError') {
                return { success: false, reason: 'cancelled' };
            }
            // Fallback to download
            this.downloadImage(canvas, title);
            return { success: true, method: 'download' };
        }
    },
    
    // Download image as fallback
    downloadImage(canvas, title) {
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
        }, 'image/png');
    },
    
    // Share configuration as URL
    shareConfig(config) {
        const params = new URLSearchParams({
            f: config.formula,
            cr: config.cReal.toFixed(6),
            ci: config.cImag.toFixed(6),
            cx: config.centerX.toFixed(6),
            cy: config.centerY.toFixed(6),
            s: config.scale.toFixed(6),
            c: config.colorScheme
        });
        
        const url = `${window.location.origin}${window.location.pathname}?${params}`;
        
        if (this.canShare()) {
            navigator.share({
                title: 'Fractal Configuration',
                text: 'Check out this fractal!',
                url: url
            });
        } else {
            // Copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                return { success: true, method: 'clipboard', url: url };
            });
        }
        
        return url;
    },
    
    // Load config from URL params
    loadConfigFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        if (!params.has('f')) return null;
        
        return {
            formula: params.get('f') || 'mandelbrot',
            cReal: parseFloat(params.get('cr')) || -0.7,
            cImag: parseFloat(params.get('ci')) || 0.27015,
            centerX: parseFloat(params.get('cx')) || -0.5,
            centerY: parseFloat(params.get('cy')) || 0,
            scale: parseFloat(params.get('s')) || 2.5,
            colorScheme: params.get('c') || 'rainbow'
        };
    }
};

if (typeof module !== 'undefined') {
    module.exports = FractalShare;
}

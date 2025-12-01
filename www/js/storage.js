/**
 * Local storage manager for Fractal Explorer
 * Save/load favorites and settings
 */

const FractalStorage = {
    KEYS: {
        FAVORITES: 'fractal_favorites',
        SETTINGS: 'fractal_settings',
        LAST_STATE: 'fractal_last_state'
    },
    
    // Save a favorite fractal configuration
    saveFavorite(name, config) {
        const favorites = this.getFavorites();
        favorites.push({
            id: Date.now(),
            name: name,
            config: config,
            createdAt: new Date().toISOString()
        });
        localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(favorites));
        return true;
    },
    
    // Get all favorites
    getFavorites() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.FAVORITES)) || [];
        } catch {
            return [];
        }
    },
    
    // Delete a favorite
    deleteFavorite(id) {
        const favorites = this.getFavorites().filter(f => f.id !== id);
        localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(favorites));
    },
    
    // Save app settings
    saveSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },
    
    // Get app settings
    getSettings() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || {
                quality: 2,
                audioEnabled: false,
                showStats: true,
                hapticEnabled: true
            };
        } catch {
            return {};
        }
    },
    
    // Save last state for resume
    saveLastState(state) {
        localStorage.setItem(this.KEYS.LAST_STATE, JSON.stringify(state));
    },
    
    // Get last state
    getLastState() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.LAST_STATE));
        } catch {
            return null;
        }
    },
    
    // Export all data as JSON
    exportData() {
        return JSON.stringify({
            favorites: this.getFavorites(),
            settings: this.getSettings(),
            exportedAt: new Date().toISOString()
        }, null, 2);
    },
    
    // Import data from JSON
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.favorites) {
                localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(data.favorites));
            }
            if (data.settings) {
                localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data.settings));
            }
            return true;
        } catch {
            return false;
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = FractalStorage;
}

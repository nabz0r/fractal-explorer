# 🌀 Fractal Explorer - Android App

[![Version](https://img.shields.io/badge/version-1.2.0-blue)](https://github.com/nabz0r/fractal-explorer/releases)
[![Android](https://img.shields.io/badge/platform-Android%207%2B-green)](https://developer.android.com)
[![License](https://img.shields.io/badge/license-MIT-purple)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-ready-orange)](https://web.dev/progressive-web-apps/)

Interactive fractal explorer with full touch support, beautiful presets, auto-explore animations, and ambient soundscape. Built with Capacitor for Android.

## ✨ Features

### Core
- 🎨 **6 Fractal Formulas**: Mandelbrot, cubic, quartic, sin, exp, and custom
- 📱 **Full Touch Support**: Pinch-to-zoom, drag to pan, double-tap zoom
- 🎯 **10 Beautiful Presets**: One-tap access to stunning configurations
- 🎬 **Auto-Explore Mode**: Watch fractals animate automatically
- 📷 **Screenshot Export**: Save high-quality PNG images
- 🎨 **8 Color Schemes**: Rainbow, Fire, Ocean, Sunset, Neon, Pastel, Monochrome + Custom

### Audio & Feedback
- 🔊 **Ambient Audio**: Chill soundscape adapts to zoom level
- 📳 **Haptic Feedback**: Tactile response on interactions

### Mobile Experience
- 📺 **Fullscreen Mode**: Immersive viewing
- 📴 **Offline Support**: Works without internet (PWA)
- 💾 **Save Favorites**: Store your best fractals locally
- 📤 **Share**: Share images or configs via Web Share API
- ⚡ **Adaptive Quality**: Smooth performance on any device

### PWA Features
- 🚀 **App Shortcuts**: Quick access to Random and Auto modes
- 📲 **Installable**: Add to home screen like a native app
- 🔗 **URL Sharing**: Share fractal configurations via link

## 📱 Screenshots

| Main View | Presets | Auto Mode |
|-----------|---------|----------|
| Pinch & zoom | 10 presets | Animated exploration |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Android SDK (for APK)
- Android Studio (recommended)

### Installation

```bash
# Clone
git clone https://github.com/nabz0r/fractal-explorer.git
cd fractal-explorer

# Install
npm install

# Generate icons (optional)
npm install sharp
node scripts/generate-icons.js

# Add Android
npm run cap:add:android
npm run cap:sync
```

### Development

```bash
# Web version
npm run serve
# Open http://localhost:8000

# Android Studio
npm run cap:open:android
```

### Build APK

```bash
npm run cap:build
# Output: android/app/build/outputs/apk/release/
```

## 🎮 Controls

| Gesture | Action |
|---------|--------|
| **Pinch** | Zoom in/out |
| **Drag** | Pan view |
| **Double-tap** | Zoom in 2x |
| **Long press** | Context menu |
| **Scroll** | Zoom (desktop) |

## 🎨 Presets

1. **Classic** - Iconic Mandelbrot
2. **Spiral** - Spiraling patterns
3. **Lightning** - Electric fractals
4. **Dendrite** - Tree structures
5. **Siegel** - Carl Siegel disk
6. **Douady** - Complex boundaries
7. **San Marco** - Cathedral patterns
8. **Cubic** - z³ + c
9. **Sine** - Trigonometric
10. **Exp** - Exponential

## 📁 Project Structure

```
fractal-explorer/
├── www/
│   ├── index.html        # Main app
│   ├── manifest.json     # PWA manifest
│   ├── sw.js             # Service worker
│   ├── js/
│   │   ├── gestures.js   # Touch handling
│   │   ├── storage.js    # Local storage
│   │   └── share.js      # Share functionality
│   └── icons/
│       └── icon.svg      # App icon source
├── android-config/       # Android native configs
├── scripts/
│   └── generate-icons.js # Icon generator
├── capacitor.config.json
├── package.json
├── BUILD_GUIDE.md
└── README.md
```

## ⚙️ Configuration

### capacitor.config.json
- App ID: `com.nabz0r.fractalexplorer`
- Splash screen: Immersive dark theme
- Status bar: Dark style

### URL Parameters
Share fractals via URL:
```
?f=mandelbrot&cr=-0.7&ci=0.27&cx=-0.5&cy=0&s=2.5&c=rainbow
```

## 🔧 Troubleshooting

### Build fails
```bash
cd android && ./gradlew clean && cd ..
npm run cap:sync
```

### Icons not showing
```bash
node scripts/generate-icons.js
npm run cap:sync
```

### Touch issues
- Check `touch-action: none` in CSS
- Verify Chrome 70+ on device

## 📝 Changelog

### v1.2.0 (Current)
- ✅ Double-tap to zoom
- ✅ Long press context menu
- ✅ Inertia scrolling
- ✅ Save/load favorites
- ✅ Web Share API integration
- ✅ URL parameter sharing
- ✅ PWA shortcuts
- ✅ Android native config files

### v1.1.0
- ✅ Full touch support
- ✅ 10 presets
- ✅ Screenshot export
- ✅ Auto-explore mode
- ✅ Fullscreen mode
- ✅ PWA support
- ✅ Haptic feedback

### v1.0.0
- Initial release

## 🤝 Contributing

PRs welcome! Please:
1. Fork the repo
2. Create feature branch
3. Commit changes
4. Open PR

## 📄 License

MIT © nabz0r

---

Made with 🌀 by [nabz0r](https://github.com/nabz0r)

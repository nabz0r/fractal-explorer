# 🌀 Fractal Explorer - Android App

Interactive fractal explorer with full touch support, real-time controls, beautiful presets, and ambient soundscape. Built with Capacitor for Android.

![Fractal Explorer](https://img.shields.io/badge/version-1.1.0-blue) ![Android](https://img.shields.io/badge/platform-Android-green) ![License](https://img.shields.io/badge/license-MIT-purple)

## ✨ Features

- 🎨 **6 Fractal Formulas**: Mandelbrot, cubic, quartic, sin, exp, and custom
- 📱 **Full Touch Support**: Pinch-to-zoom, multi-touch pan, smooth gestures
- 🎯 **10 Beautiful Presets**: One-tap access to stunning fractal configurations
- 🎬 **Auto-Explore Mode**: Sit back and watch the app explore fractals automatically
- 📷 **Screenshot Export**: Save your favorite fractals as high-quality images
- 🎨 **7 Color Schemes**: Rainbow, Fire, Ocean, Sunset, Neon, Pastel, Monochrome + Custom
- 🔊 **Ambient Audio**: Chill soundscape that adapts to your exploration
- ⚡ **Optimized Rendering**: Adaptive quality settings for smooth performance
- 📺 **Fullscreen Mode**: Immersive viewing experience
- 📴 **Offline Support**: Works without internet (PWA)
- 📳 **Haptic Feedback**: Tactile response on Android

## 📱 Screenshots

| Main View | Presets | Controls |
|-----------|---------|----------|
| Pinch to zoom, drag to pan | 10 curated presets | Collapsible panel |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Android SDK (for building APK)
- Android Studio (recommended)

### Installation

```bash
# Clone the repo
git clone https://github.com/nabz0r/fractal-explorer.git
cd fractal-explorer

# Install dependencies
npm install

# Add Android platform
npm run cap:add:android

# Sync web assets
npm run cap:sync
```

### Development

```bash
# Run web version
npm run serve
# Open http://localhost:8000

# Open in Android Studio
npm run cap:open:android
```

### Build APK

```bash
# Full build
npm run cap:build

# APK location: android/app/build/outputs/apk/release/
```

## 🎮 Controls

| Gesture | Action |
|---------|--------|
| **Pinch** | Zoom in/out |
| **Drag** | Pan view |
| **Tap header buttons** | Screenshot, Auto, Audio, Fullscreen |
| **Pull up panel** | Access all controls |

## 🎨 Presets

1. **Classic** - The iconic Mandelbrot set
2. **Spiral** - Beautiful spiraling patterns
3. **Lightning** - Electric blue fractals
4. **Dendrite** - Tree-like structures
5. **Siegel** - Named after Carl Siegel
6. **Douady** - Complex boundaries
7. **San Marco** - Cathedral-like patterns
8. **Cubic** - z³ + c variation
9. **Sine** - Trigonometric beauty
10. **Exp** - Exponential fractals

## 📁 Project Structure

```
fractal-explorer/
├── www/
│   ├── index.html      # Main app (all-in-one)
│   ├── manifest.json   # PWA manifest
│   └── sw.js           # Service worker
├── android/            # Android native code
├── capacitor.config.json
├── package.json
├── BUILD_GUIDE.md
└── README.md
```

## ⚙️ Configuration

### App Settings (capacitor.config.json)
- `appId`: `com.nabz0r.fractalexplorer`
- `appName`: `Fractal Explorer`
- Splash screen with immersive mode
- Status bar styling

## 🔧 Troubleshooting

### Build issues
```bash
cd android && ./gradlew clean && cd ..
npm run cap:sync
```

### Touch not working
- Make sure Chrome 70+ on device
- Check touch-action CSS

### Audio not playing
- Audio requires user interaction first
- Check volume settings

## 📝 Changelog

### v1.1.0
- ✅ Full touch support (pinch-to-zoom, pan)
- ✅ 10 beautiful presets
- ✅ Screenshot export
- ✅ Auto-explore animation mode
- ✅ Fullscreen immersive mode
- ✅ PWA with offline support
- ✅ Haptic feedback
- ✅ Collapsible control panel
- ✅ 2 new color schemes (Neon, Pastel)

### v1.0.0
- Initial release

## 🔗 Links

- [Capacitor Docs](https://capacitorjs.com)
- [Fractals Math](https://en.wikipedia.org/wiki/Mandelbrot_set)

## 📄 License

MIT

---

Made with 🌀 by nabz0r
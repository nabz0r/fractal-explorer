# 🌀 Fractal Explorer - Android App

Interactive fractal explorer with real-time z/c control, zoom, colors, and ambient soundscape. Built with Capacitor for Android.

## Features

- 🎨 **6 Fractal Formulas**: Mandelbrot, cubic, quartic, sin, exp, and custom
- 🎯 **Interactive Controls**: Live adjustment of C values, zoom, iterations
- 🎨 **Color Schemes**: Rainbow, Fire, Ocean, Sunset, Monochrome, Custom
- 🔊 **Ambient Audio**: Chill soundscape that adapts to zoom level
- ⚡ **Optimized Rendering**: Adaptive quality settings
- 📱 **Full Android Support**: APK/AAB build ready

## Setup

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

# Sync web assets to Android
npm run cap:sync
```

## Development

### Web Version
```bash
npm run serve
# Open http://localhost:8000
```

### Android Development
```bash
# Open in Android Studio
npm run cap:open:android

# Or build APK directly (requires Java/Gradle)
# npm run cap:build
```

## Building APK

### Option 1: Using Android Studio
1. Run `npm run cap:open:android`
2. In Android Studio: Build → Build Bundle(s) / APK(s)
3. APK will be in `android/app/build/outputs/apk/`

### Option 2: Using Gradle
```bash
cd android
./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/release/app-release.apk`

## Ad Integration

To add AdMob ads:

1. Get your AdMob App ID from Google AdMob Console
2. Update `capacitor.config.json`:
```json
"plugins": {
  "GoogleMobileAds": {
    "androidAppId": "ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"
  }
}
```

3. Banner ads are ready to be placed in the UI

## Project Structure

```
fractal-explorer/
├── www/
│   ├── index.html       # Main app (fractal explorer)
│   └── capacitor.html   # Capacitor init
├── android/             # Android native code
├── capacitor.config.json
└── package.json
```

## Configuration

### App Settings (capacitor.config.json)
- `appId`: `com.nabz0r.fractalexplorer`
- `appName`: `Fractal Explorer`
- `webDir`: `www`

## Performance Tips

- Start with Render Quality "Medium" for smooth animation
- Increase iterations only when zoomed in for detail
- Use lower quality on older devices

## Controls (Web & Mobile)

- **Scroll/Pinch**: Zoom in/out
- **Drag**: Pan the fractal
- **Sliders**: Adjust parameters in real-time
- **Audio Toggle**: Enable/disable ambient soundscape

## Troubleshooting

### Build issues
```bash
# Clear gradle cache
cd android && ./gradlew clean && cd ..

# Rebuild Capacitor project
npm run cap:sync
```

### APK won't install
- Check device supports Android 7.0+
- Ensure you have about 100MB free space
- Try via ADB: `adb install app-release.apk`

## Links

- [Capacitor Docs](https://capacitorjs.com)
- [AdMob Setup](https://admob.google.com)
- [Fractals Math](https://en.wikipedia.org/wiki/Mandelbrot_set)

## License

MIT

---

Made with 🌀 by nabz0r

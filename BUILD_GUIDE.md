# Fractal Explorer - Build & Release Guide

## Prerequisites

1. **Android SDK**
   ```bash
   # Install via Android Studio or sdkmanager
   sdkmanager "platforms;android-34"
   sdkmanager "build-tools;34.0.0"
   ```

2. **Java Development Kit (JDK)**
   ```bash
   # Min JDK 11, recommended JDK 17
   java -version
   ```

3. **Gradle** (included with Android Studio)

## Quick Start for Beginners

### Step 1: Setup Local Machine
```bash
# 1. Install Node.js if not present
node --version  # Should be v16+

# 2. Clone project
git clone https://github.com/nabz0r/fractal-explorer.git
cd fractal-explorer

# 3. Install dependencies
npm install
```

### Step 2: Add Android Platform
```bash
npm run cap:add:android
```

This creates the `android/` folder with all native Android code.

### Step 3: Build APK

#### Option A: Using Android Studio (Easiest)
```bash
# Open Android Studio project
npm run cap:open:android

# In Android Studio:
# 1. Menu: Build → Build Bundle(s) / APK(s) → Build APK
# 2. Wait for build to complete
# 3. APK location shown in bottom notification

# Install on device:
# 1. Connect Android phone via USB
# 2. Enable Developer Mode (tap Build Number 7 times)
# 3. Allow USB Debugging
# 4. In Android Studio: Run → Run 'app'
```

#### Option B: Using Command Line (Advanced)
```bash
cd android

# Build debug APK (faster)
./gradlew assembleDebug
# APK: app/build/outputs/apk/debug/app-debug.apk

# Build release APK (smaller, optimized)
./gradlew assembleRelease
# APK: app/build/outputs/apk/release/app-release.apk
```

### Step 4: Install on Phone

#### Option A: Via USB
```bash
# With phone connected and Developer Mode enabled
adb install android/app/build/outputs/apk/release/app-release.apk
```

#### Option B: Share APK
1. Find APK file (see paths above)
2. Email to yourself or cloud drive
3. Download on phone and tap to install
4. Allow "Unknown Sources" in Settings > Apps

#### Option C: Play Store (Production)
1. Create keystore (one-time):
```bash
keytool -genkey -v -keystore android/app/release-key.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias fractal
```

2. Sign release APK:
```bash
jarsigner -verbose -sigalg SHA1withRSA \
  -digestalg SHA1 \
  -keystore android/app/release-key.jks \
  android/app/build/outputs/apk/release/app-release.apk fractal
```

3. Upload to Google Play Console

## Common Issues & Fixes

### "Android SDK not found"
```bash
# Set Android SDK path (Linux/Mac)
export ANDROID_SDK_ROOT=/path/to/android/sdk

# Or in Android Studio:
# File → Project Structure → SDK Location
```

### "Gradle build failed"
```bash
# Clear cache and rebuild
cd android
./gradlew clean
./gradlew assembleRelease
cd ..
```

### "Cannot find Java"
```bash
# Install JDK 17
brew install openjdk@17  # macOS
# or download from adoptium.net

# Set JAVA_HOME
export JAVA_HOME=/path/to/jdk17
```

### APK crashes on startup
1. Check logs: `adb logcat | grep Fractal`
2. Sync assets: `npm run cap:sync`
3. Rebuild: `npm run cap:build`

## Release Checklist

- [ ] Test on Android 7.0+ device
- [ ] Test all fractal formulas
- [ ] Test audio on/off
- [ ] Test zoom in/out
- [ ] Check battery usage (should be low at low quality)
- [ ] Test on tablet (landscape mode)
- [ ] Update version in `package.json`
- [ ] Update `capacitor.config.json` with real AdMob ID
- [ ] Create GitHub release with APK

## Version Bumping

```json
// package.json
{
  "version": "1.0.1"  // Increment this
}
```

Then rebuild APK.

## Upload to Play Store

1. Go to [Google Play Console](https://play.google.com/console)
2. Create new app: "Fractal Explorer"
3. Fill in store listing details
4. Upload signed APK
5. Set pricing and availability
6. Submit for review (~24-48 hours)

## Performance Optimization

- APK is lightweight (~2MB)
- Rendering uses canvas optimization
- Audio is ambient (low CPU impact)
- On older phones, use "Low" quality setting

## Help & Support

- [Capacitor CLI Docs](https://capacitorjs.com/docs/cli)
- [Android Build Docs](https://developer.android.com/build)
- [AdMob Integration](https://admob.google.com/home)

---

**That's it!** Your Fractal Explorer app should now be running on Android. 🚀

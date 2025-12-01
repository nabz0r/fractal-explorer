# 🧘 Fractal Calm - Visual Meditation App

[![Version](https://img.shields.io/badge/version-2.0.0-blue)](https://github.com/nabz0r/fractal-explorer/releases)
[![Android](https://img.shields.io/badge/platform-Android-green)](https://play.google.com/store)
[![Category](https://img.shields.io/badge/category-Health%20%26%20Wellness-purple)]()

**Find inner peace through mesmerizing fractal visuals.**

Guided breathing exercises synchronized with infinite mathematical beauty. Ambient soundscapes adapt to your mood. Track your meditation journey.

## 💰 Business Model

**Freemium:**
- 3 free sessions
- Sessions up to 10 min
- 4 mood themes

**Premium (€4.99 one-time):**
- Unlimited sessions
- Sessions up to 30 min
- 12 mood themes
- Premium soundscapes
- Detailed analytics
- No ads ever

## ✨ Features

### Core Experience
- 🌀 **Infinite Fractals** - Hypnotic visuals that evolve as you meditate
- 💨 **Guided Breathing** - 4-2-4-2 breathing pattern with visual cues
- 🎵 **Ambient Audio** - Binaural-inspired soundscapes
- ⏱️ **Timed Sessions** - 3, 5, 10, 15+ minute options

### Mood Themes
- 🌊 **Calm** - Blue/purple peaceful vibes
- 🎯 **Focus** - Green energizing patterns
- 🌙 **Sleep** - Deep dark soothing visuals
- ⚡ **Energy** - Warm stimulating fractals

### Tracking
- 📊 Total sessions & minutes
- 🔥 Daily streak counter
- 🫁 Breath count per session

## 📱 Screenshots

| Home | Session | Complete |
|------|---------|----------|
| Mood selection | Breathing guide | Stats |

## 🚀 Quick Start

```bash
git clone https://github.com/nabz0r/fractal-explorer.git
cd fractal-explorer
npm install
npm run serve
# Open http://localhost:8000
```

### Build APK

```bash
npm run cap:add:android
npm run cap:sync
npm run cap:build
```

## 💳 Monetization Integration

### Google Play Billing (TODO)

```javascript
// In capacitor.config.json, add:
{
  "plugins": {
    "Purchases": {
      "apiKey": "your_revenuecat_api_key"
    }
  }
}
```

Recommended: Use [RevenueCat](https://www.revenuecat.com/) for easier IAP management.

### AdMob (Optional - Free tier)

Can add interstitial ads between free sessions if desired.

## 📁 Project Structure

```
fractal-calm/
├── www/
│   ├── index.html      # Main app (all-in-one)
│   ├── manifest.json   # PWA config
│   └── sw.js           # Offline support
├── capacitor.config.json
├── package.json
└── BUILD_GUIDE.md
```

## 🎯 Target Market

- People seeking stress relief
- Meditation beginners (visual > audio only)
- Insomnia sufferers (sleep mode)
- Focus/productivity seekers
- Math/art enthusiasts

## 📈 Competitive Advantage

| App | Price | Visual | Unique |
|-----|-------|--------|--------|
| Calm | €70/yr | Static images | Celebrity voices |
| Headspace | €60/yr | Animations | Courses |
| **Fractal Calm** | **€4.99** | **Infinite generative** | **Math + meditation** |

## 📝 Changelog

### v2.0.0 - Fractal Calm
- 🧘 Complete pivot to meditation app
- 💰 Freemium model (3 free sessions)
- 🎨 4 mood themes with unique fractals
- 💨 Guided breathing (4-2-4-2 pattern)
- 📊 Session tracking & streaks
- 🎵 Ambient audio
- ✨ Premium modal & purchase flow
- 📱 Beautiful intro screen

### v1.x - Fractal Explorer
- Original fractal explorer app

## 📝 Play Store Listing (Draft)

**Title:** Fractal Calm - Visual Meditation

**Short description:**
Find peace in infinite mathematical beauty. Breathe, relax, sleep.

**Full description:**
Fractal Calm combines ancient breathing techniques with mesmerizing fractal visuals for a unique meditation experience.

✨ INFINITE VISUALS
Watch as mathematical patterns evolve endlessly, guiding your mind to stillness.

💨 GUIDED BREATHING  
Follow the visual breathing guide - inhale as the circle expands, exhale as it contracts.

🌙 MOOD THEMES
• Calm - Peaceful blues for relaxation
• Focus - Energizing greens for productivity  
• Sleep - Deep darks for bedtime
• Energy - Warm oranges for motivation

📊 TRACK PROGRESS
See your meditation minutes, session count, and daily streak grow.

Perfect for:
• Meditation beginners
• Stress & anxiety relief
• Better sleep
• Focus & productivity
• Quick mental breaks

Start your journey to calm today.

## 📄 License

MIT © nabz0r

---

Made with 🧘 for inner peace

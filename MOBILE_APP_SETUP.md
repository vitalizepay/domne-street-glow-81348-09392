# Mobile App Setup Guide

This document provides instructions for setting up and running the Domine mobile application.

## Quick Start

The mobile app is located in the `mobile-app/` directory and is a separate Expo/React Native project.

### 1. Navigate to Mobile App Directory

```bash
cd mobile-app
```

### 2. Install Dependencies (Already Done)

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 3. Start the Development Server

```bash
npx expo start
```

**Important**: The first time you run this, it may take 1-2 minutes to start the Metro bundler. This is completely normal. Once started, you'll see a QR code in your terminal.

### 4. Run on Your Device

#### Option A: Use Your Phone
1. Install **Expo Go** app from App Store (iOS) or Play Store (Android)
2. Scan the QR code with your camera (iOS) or Expo Go app (Android)
3. The app will load on your device

#### Option B: Use Emulator/Simulator
- **Android**: `npm run android` (requires Android Studio and emulator)
- **iOS**: `npm run ios` (requires Xcode on Mac)
- **Web**: `npm run web` (opens in browser)

## What's Included

The mobile app includes:

- **Home Screen**: Browse all products in a grid layout
- **Product Detail**: View product images, select size, add to cart
- **Shopping Cart**: Manage cart items, update quantities
- **Authentication**: Sign up, sign in, and manage account
- **Persistent Storage**: Cart data saved locally on device

## Technology

- **React Native** with **Expo** framework
- **TypeScript** for type safety
- **Expo Router** for file-based navigation
- **Supabase** for authentication (same backend as web)
- **AsyncStorage** for local cart storage

## Features

### Completed Features
- Product catalog browsing
- Product detail pages with image galleries
- Size selection
- Add to cart functionality
- Cart management
- User authentication
- Persistent cart storage

### Coming Soon
- Checkout functionality
- Order history
- Push notifications
- Favorites/Wishlist

## App Structure

```
mobile-app/
├── app/              # All screens (using Expo Router)
├── lib/              # Utilities (Supabase, cart, products)
├── types/            # TypeScript types
├── assets/           # Images and icons
└── .env              # Environment variables (already configured)
```

## Important Notes

1. **Separate Project**: The mobile app is completely separate from the web app
2. **Shared Backend**: Uses the same Supabase backend as the web app
3. **Product Data**: Product information and images are accessed from the web app's public folder
4. **Environment Variables**: Already configured in `.env` file

## Troubleshooting

### Port Already in Use
If you get a port error, stop other Expo servers or use:
```bash
npx expo start --port 8082
```

### Can't Connect to Development Server
- Ensure your phone and computer are on the same WiFi network
- Try tunnel connection: `npx expo start --tunnel`

### Module Not Found Errors
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache
```bash
npx expo start --clear
```

## Building for Production

### Android APK
```bash
npx expo build:android
```

### iOS App
```bash
npx expo build:ios
```

Note: Building for production requires an Expo account.

## Support

For questions or issues with the mobile app:
1. Check the main README.md in the mobile-app folder
2. Ensure all dependencies are installed
3. Verify environment variables are set correctly

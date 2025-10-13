# Domine Mobile App

A React Native mobile application built with Expo for the Domine e-commerce platform.

## Features

- Browse product catalog with beautiful grid layout
- View detailed product information with image gallery
- Add products to cart with size selection
- Cart management with quantity updates
- User authentication with Supabase
- Persistent cart storage using AsyncStorage
- Smooth navigation with Expo Router

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Expo Router** for file-based routing
- **Supabase** for authentication and backend
- **AsyncStorage** for local data persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g expo-cli`
- Expo Go app on your iOS/Android device (for testing)

### Installation

1. Navigate to the mobile app directory:
```bash
cd mobile-app
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

**Note**: The first time you run `expo start`, it may take 1-2 minutes to start the Metro bundler. This is normal.

4. Once started, you'll see a QR code in your terminal. Scan it with:
   - **iOS**: Camera app (opens Expo Go automatically)
   - **Android**: Expo Go app (scan within the app)

5. Make sure you have **Expo Go** installed on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Project Structure

```
mobile-app/
├── app/                      # Screen components (Expo Router)
│   ├── _layout.tsx          # Root layout and navigation
│   ├── index.tsx            # Home screen with product grid
│   ├── cart.tsx             # Shopping cart screen
│   ├── auth.tsx             # Authentication screen
│   └── product/
│       └── [slug].tsx       # Product detail screen
├── lib/                      # Utilities and configurations
│   ├── supabase.ts          # Supabase client setup
│   ├── productData.ts       # Product data management
│   └── cartStore.ts         # Cart storage functions
├── types/                    # TypeScript type definitions
│   └── product.ts           # Product and cart interfaces
├── assets/                   # Static assets (icons, images)
├── app.json                  # Expo configuration
├── package.json              # Dependencies
└── .env                      # Environment variables
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Open in Android emulator
- `npm run ios` - Open in iOS simulator (Mac only)
- `npm run web` - Open in web browser

## Features in Detail

### Product Catalog
- Grid view of all available products
- Product images, names, and prices
- Color indicators for each product
- Pull-to-refresh functionality

### Product Details
- Image gallery with swipe navigation
- Size selection (S, M, L, XL, XXL)
- Add to cart functionality
- Product specifications

### Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Total calculation
- Empty cart handling

### Authentication
- Email/password sign up
- Email/password sign in
- User profile view
- Sign out functionality

## Environment Variables

The app uses the following environment variables (already configured in `.env`):

```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Building for Production

### Android
```bash
expo build:android
```

### iOS
```bash
expo build:ios
```

## Notes

- Product images are served from the Supabase storage bucket
- Cart data persists locally using AsyncStorage
- Authentication state is managed by Supabase Auth
- All product data matches the web application

## Support

For issues or questions, please refer to the main project documentation.

# Domine Mobile App - Android Build & Google Play Publishing Guide

## Prerequisites

Before you begin, you need:
1. An Expo account (sign up at expo.dev)
2. A Google Play Developer account ($25 one-time fee)
3. Node.js and npm installed

## Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

## Step 2: Login to Expo

```bash
cd mobile-app
eas login
```

## Step 3: Configure Your Project

```bash
eas build:configure
```

This will prompt you to create an Expo project. Follow the prompts.

## Step 4: Build APK (For Testing)

To build a test APK that you can install directly on Android devices:

```bash
eas build --platform android --profile preview
```

This will:
- Build an APK file
- Provide a download link when complete
- Take about 10-20 minutes

Download the APK and install it on your Android device to test.

## Step 5: Build AAB (For Google Play)

For production release on Google Play Store, you need an Android App Bundle (AAB):

```bash
eas build --platform android --profile production
```

## Step 6: Set Up Google Play Console

1. Go to https://play.google.com/console
2. Create a developer account (if you haven't)
3. Pay the $25 one-time registration fee
4. Click "Create App"
5. Fill in:
   - App name: "Domine"
   - Default language: English
   - App or game: App
   - Free or paid: Free
   - Accept declarations

## Step 7: Complete Store Listing

In Google Play Console, complete all required sections:

### App Details
- **App name**: Domine
- **Short description**: Premium oversized t-shirts for modern style
- **Full description**:
  ```
  Discover Domine - your destination for premium oversized t-shirts.

  Browse our curated collection of 21+ unique designs featuring:
  - Premium quality fabrics
  - Comfortable oversized fits
  - Multiple color options
  - Tie-dye and solid styles
  - Secure checkout
  - Order tracking

  Shop with confidence:
  ✓ Easy returns and exchanges
  ✓ Secure payment processing
  ✓ Fast shipping
  ✓ Customer support

  Download now and elevate your wardrobe!
  ```

### Graphics
You need to provide:
- **App icon**: 512x512 PNG (32-bit)
- **Feature graphic**: 1024x500 PNG or JPEG
- **Phone screenshots**: At least 2 (1080x1920 or similar)
- **7-inch tablet screenshots**: At least 2 (optional but recommended)

To generate screenshots:
1. Run the app in Expo
2. Take screenshots of key screens (homepage, product detail, cart)
3. Use online tools like mockuphone.com to make them look professional

### Categorization
- **App category**: Shopping
- **Tags**: fashion, clothing, shopping, t-shirts
- **Content rating**: Complete questionnaire (likely Everyone)

### Contact Details
- Email address
- Phone number (optional)
- Website (if you have one)

### Privacy Policy
You MUST provide a privacy policy URL. You can:
- Use a free generator like privacypolicygenerator.info
- Host it on your website
- Use GitHub Pages

## Step 8: Set Up Release

### Create a Release
1. Go to "Production" → "Create new release"
2. Upload the AAB file you built with EAS
3. Add release notes:
   ```
   Initial release of Domine mobile app
   - Browse 21+ premium t-shirt designs
   - Secure checkout and payments
   - User account management
   - Shopping cart functionality
   ```

### App Signing
- Use Google Play App Signing (recommended)
- Google will handle the signing key

## Step 9: Automated Submission (Optional)

You can automate submission using EAS Submit:

1. Create a service account in Google Cloud Console:
   - Go to https://console.cloud.google.com
   - Create a new project
   - Enable Google Play Android Developer API
   - Create service account with JSON key
   - Grant "Service Account User" role

2. Add service account to Google Play Console:
   - Go to Users and permissions
   - Invite new users
   - Add service account email
   - Grant "Release to production" permission

3. Save the JSON key as `google-service-account.json`

4. Submit with:
```bash
eas submit --platform android
```

## Step 10: Review Process

After submission:
1. Google will review your app (can take 1-7 days)
2. You'll receive email notifications about status
3. If rejected, you'll get feedback on what to fix
4. Once approved, your app will be live!

## Updating Your App

For future updates:

1. Update version in app.json:
```json
{
  "expo": {
    "version": "1.0.1",
    "android": {
      "versionCode": 2
    }
  }
}
```

2. Build new version:
```bash
eas build --platform android --profile production
```

3. Create new release in Google Play Console

## Troubleshooting

### Build Fails
- Check expo.dev build logs
- Ensure all dependencies are compatible
- Verify app.json configuration

### Upload Rejected
- Check version codes are incrementing
- Ensure package name matches
- Verify signing key consistency

### App Rejected
- Review Google Play policies
- Check content rating accuracy
- Ensure privacy policy is accessible
- Verify all required permissions are justified

## Important Notes

1. **Testing**: Always test the APK thoroughly before uploading AAB to production
2. **Permissions**: Only request necessary permissions
3. **Privacy**: Be transparent about data collection
4. **Updates**: Plan for regular updates and bug fixes
5. **Support**: Provide customer support email in store listing

## Need Help?

- Expo Documentation: https://docs.expo.dev/build/setup/
- Google Play Help: https://support.google.com/googleplay/android-developer
- React Native Guide: https://reactnative.dev/docs/signed-apk-android

Good luck with your app launch!

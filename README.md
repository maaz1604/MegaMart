# MegaMart

MegaMart is a simple React Native inventory app for managing stock items. It provides three views inside one screen:

- All Items: Shows the full inventory list.
- Low Stock: Shows only items with stock less than 10.
- Create: Lets you add, edit, and delete inventory items.

## Tech Stack

- React 19
- React Native 0.84.1
- JavaScript (JSX)
- ESLint + Jest

## Features

- Switch between All Items, Low Stock, and Create views.
- Add new inventory items.
- Edit existing inventory items.
- Delete inventory items.
- Basic client-side validation for item name and stock.
- Visual highlight for low-stock rows.

## Validation Rules

The Create flow validates user input before adding or updating items:

- Item name is required.
- Item name must contain letters and spaces only.
- Stock amount is required.
- Stock amount must be a valid non-negative number.

## Project Structure

```text
MegaMart/
	App.jsx
	index.js
	package.json
	android/
	ios/
	src/
		screens/
			HomeScreen.jsx
			AllItems.jsx
			CreateScreen.jsx
	__tests__/
		App.test.tsx
```

## Getting Started

### Prerequisites

Make sure your machine is set up for React Native development:

- Node.js >= 22.11.0
- Android Studio (for Android emulator/device)
- Xcode (for iOS, macOS only)

For full environment setup, follow the React Native CLI guide:
https://reactnative.dev/docs/environment-setup

### Install Dependencies

```bash
npm install
```

### Start Metro Bundler

```bash
npm run start
```

### Run on Android

```bash
npm run android
```

### Run on iOS (macOS only)

```bash
npm run ios
```

## Available Scripts

- npm run start: Start Metro bundler.
- npm run android: Build and run Android app.
- npm run ios: Build and run iOS app.
- npm run lint: Run ESLint checks.
- npm run test: Run Jest tests.

## How Data Works

- Initial inventory data is defined in HomeScreen state.
- Add, edit, and delete operations update local in-memory state.
- Data is not persisted; app restart resets to default list.

## Current UI Behavior

- Low Stock view filters items where stock < 10.
- New items are added to the top of the list.
- Create screen also shows all current items with Edit and Delete actions.


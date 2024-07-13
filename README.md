# thrones-api-react-native-app

This project is a React Native application with Firebase authentication, database integration, character listing from ThronesAPI, voice-to-text features, Firebase Analytics, and native code for battery level display. Additionally, it includes a Next.js landing page.

Features
Firebase Authentication: Sign Up and Sign In processes.
Persistent User Sessions: User remains logged in across the application.
Character Listing: List characters from ThronesAPI.
Profile Screen: Displays user information with a logout feature.
Redux: State management.
Voice-to-Text: Voice input features.
Firebase Analytics: Track app statistics.
Native Code Integration: Display battery level on the profile screen.
Next.js Landing Page: Simple landing page for the application.
Requirements
Node.js
npm or yarn
Firebase project
Figma design (link provided)

## Setup

Install dependencies
npm install

## Firebase Configuration
Create a Firebase project.
Enable Authentication (Email/Password).
Set up Firestore Database.
Add Firebase configuration to firebaseConfig.js.

Integrate ThronesAPI
Fetch and display character data from ThronesAPI.

Voice-to-Text
Configure voice-to-text features using a suitable library.

Firebase Analytics
Enable and configure Firebase Analytics to track app statistics.

Native Code for Battery Level
Implement native code in Swift/Java/Kotlin to display battery level on the profile screen.

Next.js Landing Page
Create a simple landing page using Next.js.

## Running the Application
React Native
npx react-native run-android
npx react-native run-ios


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4qQawgEyUh90kVX__oGZ9nGco2yMRlj0",
  authDomain: "thrones-api-app.firebaseapp.com",
  projectId: "thrones-api-app",
  storageBucket: "thrones-api-app.appspot.com",
  messagingSenderId: "499809518010",
  appId: "1:499809518010:web:7e4e048d8762c04243dd83",
  measurementId: "G-MP7WN0RXGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
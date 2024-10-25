// firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { envs } from "./envs";

// Your Firebase config object (replace with your actual values)
const firebaseConfig = {
  apiKey: envs.FIREBASE_API_KEY,
  authDomain: envs.FIREBASE_AUTH_DOMAIN,
  projectId: envs.FIREBASE_PROJECT_ID,
  storageBucket: envs.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.FIREBASE_MESSAGING_SENDER_ID,
  appId: envs.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

export { messaging };

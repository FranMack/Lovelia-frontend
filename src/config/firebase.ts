// firebase.js
import {initializeApp} from 'firebase/app';
import {getMessaging} from 'firebase/messaging';

const FIREBASE_API_KEY = import.meta.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = import.meta.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = import.meta.env.FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = import.meta.env.FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env
  .FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = import.meta.env.FIREBASE_APP_ID;

// Your Firebase config object (replace with your actual values)
const firebaseConfig = {
  apiKey: 'AIzaSyAb__3b4qmoMjUyiL01SvT6FAM25Ggbojo',
  authDomain: 'lovelia-9859c.firebaseapp.com',
  projectId: 'lovelia-9859c',
  storageBucket: 'lovelia-9859c.appspot.com',
  messagingSenderId: '1038148980896',
  appId: '1:1038148980896:web:d906cec37e5cca2dc439c5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

export {messaging};

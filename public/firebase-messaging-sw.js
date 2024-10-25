/* eslint-disable no-undef */
// firebase-messaging-sw.js

// Import Firebase scripts (important for web push notifications)
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Firebase configuration (same as in your app)
const firebaseConfig = {
  apiKey: "AIzaSyAb__3b4qmoMjUyiL01SvT6FAM25Ggbojo",
  authDomain: "lovelia-9859c.firebaseapp.com",
  projectId: "lovelia-9859c",
  storageBucket: "lovelia-9859c.appspot.com",
  messagingSenderId: "1038148980896",
  appId: "1:1038148980896:web:d906cec37e5cca2dc439c5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message: ", payload);

  // Customize notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  // Show notification
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

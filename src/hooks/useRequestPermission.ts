import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebase";

const useRequestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Get the FCM token
      const fcmToken = await getToken(messaging, {
        vapidKey:
          "BA1Q4pKgH1X53kf9g5v2qOey7S2roBraGM8SEqOUQA5LinlUdOKK0fY4tpJXXbgz_cCnz4yB9CMKRSZsN1jgT_0", // Replace with your VAPID key from Firebase Console
      });
      if (fcmToken) {
        console.log("FCM Token:", fcmToken);
        // TODO - Send the token to your backend to store it for later use

        // Now we can store on localStorage
        localStorage.setItem("fcmToken", fcmToken);
      } else {
        console.log("No registration token available.");
      }
    } else {
      console.log("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error("Error getting permission or token:", error);
  }
};

export default useRequestPermission;

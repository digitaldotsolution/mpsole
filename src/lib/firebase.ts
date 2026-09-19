import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// MP Sole® Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZdA_18VfRyUQ5q5UvF8zmSDYTf9a7vxg",
  authDomain: "mp-solewebsite.firebaseapp.com",
  projectId: "mp-solewebsite",
  storageBucket: "mp-solewebsite.firebasestorage.app",
  messagingSenderId: "1079442993813",
  appId: "1:1079442993813:web:83b0fd7937204796f8219c",
  measurementId: "G-RW855FL0MC"
};

// Initialize Firebase without duplicate app errors
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export default app;

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// MP Sole® & Central CRM Unified Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Drbav0CQIRE8aFe3fqLLDdxBqPs1Gh8",
  authDomain: "ecomtechwebsite.firebaseapp.com",
  projectId: "ecomtechwebsite",
  storageBucket: "ecomtechwebsite.firebasestorage.app",
  messagingSenderId: "473439020528",
  appId: "1:473439020528:web:a26d4c1b1e99ec2414e935",
  measurementId: "G-R2W89G1PPX"
};

// Initialize Firebase without duplicate app errors
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export default app;

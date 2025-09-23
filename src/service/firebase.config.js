// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaH5Y9qumAKnSb3VfkZaZShv6w8z9l8Bs",
  authDomain: "swift-cart-1eb22.firebaseapp.com",
  projectId: "swift-cart-1eb22",
  storageBucket: "swift-cart-1eb22.firebasestorage.app",
  messagingSenderId: "510169106778",
  appId: "1:510169106778:web:8b1ba63514fa2813704b63",
  measurementId: "G-3NE6FC6BPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
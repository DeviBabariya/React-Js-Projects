// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUQhL0oLgde7b7za4xNpKUI8_p9myl-gk",
  authDomain: "blinkit-d5109.firebaseapp.com",
  projectId: "blinkit-d5109",
  storageBucket: "blinkit-d5109.firebasestorage.app",
  messagingSenderId: "446283288648",
  appId: "1:446283288648:web:496c5e7ba5702b6b2b887d",
  measurementId: "G-6MCWP3YYG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
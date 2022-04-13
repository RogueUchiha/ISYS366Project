// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNalvgUoXONqIqYJmN7lUQ0Ijh8NlQQqU",
  authDomain: "wvutech-bookstore.firebaseapp.com",
  projectId: "wvutech-bookstore",
  storageBucket: "wvutech-bookstore.appspot.com",
  messagingSenderId: "176235461991",
  appId: "1:176235461991:web:aba08b61aa5532ec6a83c2",
  measurementId: "G-6PW17H3KND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("hello");

export const db = getFirestore();

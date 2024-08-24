// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVbElsdv80zVpgjVH12SptBxKDYwrhe9Y",
  authDomain: "shaire-bcmdr.firebaseapp.com",
  projectId: "shaire-bcmdr",
  storageBucket: "shaire-bcmdr.appspot.com",
  messagingSenderId: "578015575554",
  appId: "1:578015575554:web:f22487b3b60441bd75b11b",
  measurementId: "G-NGDMNHMQJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };

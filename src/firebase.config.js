// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OjmhMed1724VU7KaeT1nJrDYqQE8J5s",
  authDomain: "quiz-app-6d393.firebaseapp.com",
  projectId: "quiz-app-6d393",
  storageBucket: "quiz-app-6d393.firebasestorage.app",
  messagingSenderId: "765681577914",
  appId: "1:765681577914:web:9687428f659d8516ef3783",
  measurementId: "G-LWY849MZJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }

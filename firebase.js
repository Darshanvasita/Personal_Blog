// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAu7z_DMe0H1cIu8QGuoY1QsIpBTEHJFHw",
  authDomain: "blogtastic-blog.firebaseapp.com",
  databaseURL: "https://blogtastic-blog-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blogtastic-blog",
  storageBucket: "blogtastic-blog.firebasestorage.app",
  messagingSenderId: "541237864187",
  appId: "1:541237864187:web:d108178e29ca4e6eddf25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)

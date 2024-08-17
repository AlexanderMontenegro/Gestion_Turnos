// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlVbB0X6ther8dapghNIiBGbmssCCdd-E",
  authDomain: "turnosmedicos-f7235.firebaseapp.com",
  projectId: "turnosmedicos-f7235",
  storageBucket: "turnosmedicos-f7235.appspot.com",
  messagingSenderId: "1064346770160",
  appId: "1:1064346770160:web:4c6dba1c8dbe7d3dabc12c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

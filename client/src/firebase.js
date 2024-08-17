import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlVbB0X6ther8dapghNIiBGbmssCCdd-E",
  authDomain: "turnosmedicos-f7235.firebaseapp.com",
  projectId: "turnosmedicos-f7235",
  storageBucket: "turnosmedicos-f7235.appspot.com",
  messagingSenderId: "1064346770160",
  appId: "1:1064346770160:web:4d5a004f9ea4a31c00ad7b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

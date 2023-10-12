// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGd_8Z7MUM2XCHud03uJTWcP2ZneQEFMs",
  authDomain: "projek-kelas-1c.firebaseapp.com",
  projectId: "projek-kelas-1c",
  storageBucket: "projek-kelas-1c.appspot.com",
  messagingSenderId: "177371632187",
  appId: "1:177371632187:web:1a115bad68da393828821e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

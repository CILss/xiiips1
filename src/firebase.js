// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6xHaEWKfnHGIB1X8ZtNnSU2Af17gGz08",
  authDomain: "xii-ips-1.firebaseapp.com",
  projectId: "xii-ips-1",
  storageBucket: "xii-ips-1.appspot.com",
  messagingSenderId: "715449820034",
  appId: "1:715449820034:web:2d840dee44f84c5b58259b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
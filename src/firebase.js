// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_JeH1mXbTwZlzSNve5Ys7KBp93KVAo-4",
    authDomain: "chatapp-abacd.firebaseapp.com",
    projectId: "chatapp-abacd",
    storageBucket: "chatapp-abacd.appspot.com",
    messagingSenderId: "79336268621",
    appId: "1:79336268621:web:4c1dfdf1bcbd2345760d04",
    measurementId: "G-5NXP1V3VYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ayx2NFHsZxXauAnffz48prBLNcHAI50",
  authDomain: "facil-digital-3d08f.firebaseapp.com",
  projectId: "facil-digital-3d08f",
  storageBucket: "facil-digital-3d08f.appspot.com",
  messagingSenderId: "997531656416",
  appId: "1:997531656416:web:9de3351466e34dac1ff085",
  measurementId: "G-8ZS2BRNRVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);



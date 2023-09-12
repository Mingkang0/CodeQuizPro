// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBun28bShmLEI_tVityCCsZJfaMrVd7DIM",
  authDomain: "codequiz-4822b.firebaseapp.com",
  databaseURL: "https://codequiz-4822b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "codequiz-4822b",
  storageBucket: "codequiz-4822b.appspot.com",
  messagingSenderId: "197637390332",
  appId: "1:197637390332:web:0248f73c480cfa8fd07c79",
  measurementId: "G-1RYX8WBXDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth(app);
//console.log(db)

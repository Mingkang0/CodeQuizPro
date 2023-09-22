import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

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

export const db = getDatabase(app);
export const cloudDB = getFirestore(app);
export const auth = getAuth(app);

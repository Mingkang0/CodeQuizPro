import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBun28bShmLEI_tVityCCsZJfaMrVd7DIM",
    authDomain: "codequiz-4822b.firebaseapp.com",
    projectId: "codequiz-4822b",
    storageBucket: "codequiz-4822b.appspot.com",
    messagingSenderId: "197637390332",
    appId: "1:197637390332:web:0248f73c480cfa8fd07c79",
    measurementId: "G-1RYX8WBXDL",
    databaseURL: "https://codequiz-4822b-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
console.log(database)

function writeUserData(userId:any, name:any, email:any, imageUrl:any) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}
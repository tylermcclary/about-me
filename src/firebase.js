// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkRaxGxhFGCEEH7U7YIIPAAjPrd2YqD0A",
    authDomain: "about-me-440ae.firebaseapp.com",
    projectId: "about-me-440ae",
    storageBucket: "about-me-440ae.firebasestorage.app",
    messagingSenderId: "802569610266",
    appId: "1:802569610266:web:f0677a1996dcbf7d72dda3",
    measurementId: "G-ZNR3V9FMZD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
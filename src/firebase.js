// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
};

// #Firebase
// REACT_APP_FIREBASE_API_KEY=AIzaSyClWKvC-ISdPyyCRv4VUjws5jer3lE2dyI
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflixclone-1ae39.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflixclone-1ae39
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflixclone-1ae39.appspot.com
// REACT_APP_MESSAGING_SENDER=906026109047
// REACT_APP_APP_ID=1:906026109047:web:5baeafa103c20a65839e72

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

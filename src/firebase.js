// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDJA_xGvFC3qAM7pwR5UL23d_Q8Rb1acag",
    authDomain: "candle-store-f61c5.firebaseapp.com",
    projectId: "candle-store-f61c5",
    storageBucket: "candle-store-f61c5.appspot.com",
    messagingSenderId: "602918981701",
    appId: "1:602918981701:web:a443df18a934c7e9e2932c",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object

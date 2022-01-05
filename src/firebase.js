// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADRRldpF6fvwhnFTuaUMFnqyUZaSbqSrs",
  authDomain: "reels-4e348.firebaseapp.com",
  projectId: "reels-4e348",
  storageBucket: "reels-4e348.appspot.com",
  messagingSenderId: "235875236368",
  appId: "1:235875236368:web:651a6b8a1433a3af06a895"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users : firestore.collection("users"),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = firebase.storage();
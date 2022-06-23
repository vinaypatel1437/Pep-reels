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
  apiKey: "AIzaSyCRpgLyXa5mt3hRwOIrvJvwYprvMdCd3QQ",
  authDomain: "insta-reels-278ba.firebaseapp.com",
  projectId: "insta-reels-278ba",
  storageBucket: "insta-reels-278ba.appspot.com",
  messagingSenderId: "420366537881",
  appId: "1:420366537881:web:c91791dd36a04e3fdc1408"
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

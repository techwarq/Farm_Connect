// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRBBcIlGC-igA6-K-Papvwv-vDA9cv8oU",
  authDomain: "my-eco-app-e4d9c.firebaseapp.com",
  projectId: "my-eco-app-e4d9c",
  storageBucket: "my-eco-app-e4d9c.appspot.com",
  messagingSenderId: "545089200547",
  appId: "1:545089200547:web:085129b46b7ba5f18f3a16",
  measurementId: "G-E737RH3B91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
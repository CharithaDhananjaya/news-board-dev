// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH73tbgrL98TnxNGPyLkAmbz4mP4_uwmQ",
  authDomain: "web3dviewer-69f36.firebaseapp.com",
  projectId: "web3dviewer-69f36",
  storageBucket: "web3dviewer-69f36.appspot.com",
  messagingSenderId: "896058904953",
  appId: "1:896058904953:web:d28b5dc881491037225fa8",
  measurementId: "G-4QHLFJCTLC",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const FirebaseAuth = getAuth();
const FirestoreDB = getFirestore();
const FirebaseAnalytics = getAnalytics();

export { FirebaseAuth, FirestoreDB, FirebaseAnalytics };

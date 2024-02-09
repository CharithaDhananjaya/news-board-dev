// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDmeW6YfZr-9s4G4mKIDAP43huh1Q2O0-A",
  authDomain: "newsboard-74aaf.firebaseapp.com",
  projectId: "newsboard-74aaf",
  storageBucket: "newsboard-74aaf.appspot.com",
  messagingSenderId: "754466951047",
  appId: "1:754466951047:web:cfb7da545c47eafe9e0d22",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const FirebaseAuth = getAuth();
const FirestoreDB = getFirestore();
//const FirebaseAnalytics = getAnalytics();

export { FirebaseAuth, FirestoreDB };

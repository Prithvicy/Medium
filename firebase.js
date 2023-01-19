// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3KlM9opelnQTmKaDmEXPD85qo1UfXmVE",
  authDomain: "mdei-blockk.firebaseapp.com",
  projectId: "mdei-blockk",
  storageBucket: "mdei-blockk.appspot.com",
  messagingSenderId: "624926132384",
  appId: "1:624926132384:web:baae34d999bd7a8cc4a1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export {auth , provider ,db}
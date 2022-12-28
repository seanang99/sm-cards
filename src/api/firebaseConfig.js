// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: create env file
const firebaseConfig = {
  apiKey: "AIzaSyDFYnesVVcKtV2GLnZNRzfhj0gIZfJefjo",
  authDomain: "sm-cards.firebaseapp.com",
  projectId: "sm-cards",
  storageBucket: "sm-cards.appspot.com",
  messagingSenderId: "154915564942",
  appId: "1:154915564942:web:827b2b52ec50276fb108df",
  measurementId: "G-ZV9RQZE5QF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXTd6Mol7EbBUt0JsGamLD5SroS1kVppM",
  authDomain: "netflix-gpt-d4fe4.firebaseapp.com",
  projectId: "netflix-gpt-d4fe4",
  storageBucket: "netflix-gpt-d4fe4.appspot.com",
  messagingSenderId: "1047933465282",
  appId: "1:1047933465282:web:91caaa4a8c012c3e6bc15b",
  measurementId: "G-0ZPKWYTBWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
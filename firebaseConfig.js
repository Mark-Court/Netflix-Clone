// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPRY2CURvueNHk2u53tltAl7WT1nKzcbc",
  authDomain: "netflex-9b061.firebaseapp.com",
  projectId: "netflex-9b061",
  storageBucket: "netflex-9b061.firebasestorage.app",
  messagingSenderId: "1085187110035",
  appId: "1:1085187110035:web:da0ed31a10292841f3c966",
  measurementId: "G-BVZFXYTE1V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
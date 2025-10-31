// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqfT_eGJJCn4IJR9jwX0CzLT4ePO5s9X8",
  authDomain: "privat-bumamu.firebaseapp.com",
  projectId: "privat-bumamu",
  storageBucket: "privat-bumamu.firebasestorage.app",
  messagingSenderId: "82180724145",
  appId: "1:82180724145:web:870b20c04914c73cacd990",
  measurementId: "G-VX404Z15Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

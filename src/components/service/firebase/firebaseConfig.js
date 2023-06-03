
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXfvTJ2SEmzqM7tKV5C2tcJx1jB58JycU",
  authDomain: "ecommerce-e697d.firebaseapp.com",
  projectId: "ecommerce-e697d",
  storageBucket: "ecommerce-e697d.appspot.com",
  messagingSenderId: "614514766716",
  appId: "1:614514766716:web:df6891f8c1cb4e6183aaf9",
  measurementId: "G-Z2NTG489T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export { db };
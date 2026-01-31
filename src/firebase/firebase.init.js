// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUIT_1LWLrf7mlUDvA8vpcYRbHTW0qqSE",
  authDomain: "coffee-store-app-29856.firebaseapp.com",
  projectId: "coffee-store-app-29856",
  storageBucket: "coffee-store-app-29856.firebasestorage.app",
  messagingSenderId: "13293883330",
  appId: "1:13293883330:web:aeb6ff1a7248baf352105b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


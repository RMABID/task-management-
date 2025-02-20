// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvUjyzIVI4YqXO6HhQFVNuwuVzEEUgZ4M",
  authDomain: "simple-firebase-4ea51.firebaseapp.com",
  projectId: "simple-firebase-4ea51",
  storageBucket: "simple-firebase-4ea51.firebasestorage.app",
  messagingSenderId: "1083073265105",
  appId: "1:1083073265105:web:6bfc6471d99c1ea525f4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
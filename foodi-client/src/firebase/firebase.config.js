// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOngtpRaAXgwOAOMVSJ1yv5i3DBharrI",
  authDomain: "fir-foodi-client-e33d8.firebaseapp.com",
  projectId: "fir-foodi-client-e33d8",
  storageBucket: "fir-foodi-client-e33d8.appspot.com",
  messagingSenderId: "855882568783",
  appId: "1:855882568783:web:4d97fca6f9251666d7863a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
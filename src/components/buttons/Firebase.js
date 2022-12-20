// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj02PhJDDsNiOVs06kr3ECDJeu3UqrfLU",
    authDomain: "dessarrollofront-end.firebaseapp.com",
    projectId: "dessarrollofront-end",
    storageBucket: "dessarrollofront-end.appspot.com",
    messagingSenderId: "626768946854",
    appId: "1:626768946854:web:7c52071668cece47b2b667"
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export default config;
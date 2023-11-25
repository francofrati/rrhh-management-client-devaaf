// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArtGLtTW1iqlZW17gJfBmOXgzFwmQUiXw",
    authDomain: "rrhh-management-devaaf.firebaseapp.com",
    projectId: "rrhh-management-devaaf",
    storageBucket: "rrhh-management-devaaf.appspot.com",
    messagingSenderId: "195005410769",
    appId: "1:195005410769:web:f9f8b464cced25dd8c44f0",
    measurementId: "G-35VDJ269RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
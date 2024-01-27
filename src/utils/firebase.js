// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF0AmVQtAZzdMkUYUy0RlXKP1X3k2qCy0",
  authDomain: "netflix-gpt-7fc15.firebaseapp.com",
  projectId: "netflix-gpt-7fc15",
  storageBucket: "netflix-gpt-7fc15.appspot.com",
  messagingSenderId: "597663347675",
  appId: "1:597663347675:web:5125d343ae562980baedfe",
  measurementId: "G-0TZJ1KC7LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwzBSend-5XG7oG40z-KhkDPMOvrJ_-_I",
  authDomain: "netflixgpt-dc808.firebaseapp.com",
  projectId: "netflixgpt-dc808",
  storageBucket: "netflixgpt-dc808.appspot.com",
  messagingSenderId: "916187104637",
  appId: "1:916187104637:web:12ef9d975980af6a93b814",
  measurementId: "G-YXKW7Q4YE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB21c0GgQjhaW8Mva21_0YvQlsDslST51U",
  authDomain: "expense-tracker-app-863dd.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-863dd-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-app-863dd",
  storageBucket: "expense-tracker-app-863dd.appspot.com",
  messagingSenderId: "756667120137",
  appId: "1:756667120137:web:5fb895f5ba7c2c3f1a96d8",
  measurementId: "G-KK4KBH39JE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
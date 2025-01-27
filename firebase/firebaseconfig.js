import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBMGDt2MQnHEJOI0dOK_ZknWaUUMYEZABk",
  authDomain: "startcap2-8598a.firebaseapp.com",
  projectId: "startcap2-8598a",
  storageBucket: "startcap2-8598a.appspot.com",
  messagingSenderId: "816574340851",
  appId: "1:816574340851:web:8df151975e3e8401fda186",
  measurementId: "G-KSH8FTK4F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
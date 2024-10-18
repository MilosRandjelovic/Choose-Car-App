// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "choose-car-app.firebaseapp.com",
  projectId: "choose-car-app",
  storageBucket: "choose-car-app.appspot.com",
  messagingSenderId: "90260292059",
  appId: "1:90260292059:web:fb2c3ae02c570ebd7ba7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
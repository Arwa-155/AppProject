// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HjTD9eDssCJyMBnXD_R688d6lnnWqfw",
  authDomain: "slidley-37090.firebaseapp.com",
  projectId: "slidley-37090",
  storageBucket: "slidley-37090.appspot.com",
  messagingSenderId: "136522141113",
  appId: "1:136522141113:web:44c4c4f1cf3a6f681ffa68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
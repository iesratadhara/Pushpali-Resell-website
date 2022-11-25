// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtMcfMK7QriHTvu9piK3pesTtCez9A8g",
  authDomain: "pushpali-reseller.firebaseapp.com",
  projectId: "pushpali-reseller",
  storageBucket: "pushpali-reseller.appspot.com",
  messagingSenderId: "294872060688",
  appId: "1:294872060688:web:320b2b6d5ada79cdec4b95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
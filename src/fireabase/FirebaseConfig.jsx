// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN3rnbHCcCKWoR4-Lh0Qo8cjWQ9no8xs0",
  authDomain: "myfirstapp-1484a.firebaseapp.com",
  projectId: "myfirstapp-1484a",
  storageBucket: "myfirstapp-1484a.appspot.com",
  messagingSenderId: "286051131864",
  appId: "1:286051131864:web:260f421d55dbbe377212ad"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
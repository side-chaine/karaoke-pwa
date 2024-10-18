import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAw3hdoDMOo8_tNyJr0Qll-jIUhxFpNpQk",
  authDomain: "epoem-e9d6d.firebaseapp.com",
  projectId: "epoem-e9d6d",
  storageBucket: "epoem-e9d6d.appspot.com",
  messagingSenderId: "741768633751",
  appId: "1:741768633751:web:edb229519fa2bfa4d0f8d2",
  measurementId: "G-928H142ZPG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

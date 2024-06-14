// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHvf45coRDHnqMb3MhqE8E8vhYzPjEF2k",
  authDomain: "streamgyro-d4613.firebaseapp.com",
  databaseURL: "https://streamgyro-d4613-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "streamgyro-d4613",
  storageBucket: "streamgyro-d4613.appspot.com",
  messagingSenderId: "7801719287",
  appId: "1:7801719287:web:5cb8fd2a6c39def2a8c6f2",
  measurementId: "G-2M6L1E6Y1N"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const log = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, log };

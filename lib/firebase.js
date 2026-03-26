import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsZJ_Sh-PVfcvxILgYegi15KP9mg7mOHg",
  authDomain: "shagunshree-a0b5c.firebaseapp.com",
  projectId: "shagunshree-a0b5c",
  storageBucket: "shagunshree-a0b5c.firebasestorage.app",
  messagingSenderId: "399153273948",
  appId: "1:399153273948:web:799cd13ae38f95a734da99",
  measurementId: "G-3CYNG14PGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
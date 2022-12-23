import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmWD75CtNsN6FtnE3Hj3JGFkyPB7tXsnc",
  authDomain: "photo-tagging-app-538ad.firebaseapp.com",
  projectId: "photo-tagging-app-538ad",
  storageBucket: "photo-tagging-app-538ad.appspot.com",
  messagingSenderId: "143700283638",
  appId: "1:143700283638:web:1a3b5f534252022b605cd7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA-lP73ulhmHTijHmGm_OtxKKQhIqtKvDU",
  authDomain: "tiktokclone-714b1.firebaseapp.com",
  projectId: "tiktokclone-714b1",
  storageBucket: "tiktokclone-714b1.appspot.com",
  messagingSenderId: "28125573202",
  appId: "1:28125573202:web:f19f362c4ea70877d3ef8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

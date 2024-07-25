import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDum5c0MjODg6MRFdjYxrXqZ7JCrovhDT4",
  authDomain: "one-of-two-ec59e.firebaseapp.com",
  projectId: "one-of-two-ec59e",
  storageBucket: "one-of-two-ec59e.appspot.com",
  messagingSenderId: "768907484917",
  appId: "1:768907484917:web:2a1f305698af903e3b6fbc",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDB = getFirestore(app);
export const firebaseStorage = getStorage(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqZ-PIwYCOvg5LwRAWKUu5yOjA0iAlswY",
  authDomain: "quote-generator-53aae.firebaseapp.com",
  projectId: "quote-generator-53aae",
  storageBucket: "quote-generator-53aae.appspot.com",
  messagingSenderId: "303720021080",
  appId: "1:303720021080:web:95e38ad6da6375f0799e2d",
  measurementId: "G-D0TWEHK0M4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
export default app;

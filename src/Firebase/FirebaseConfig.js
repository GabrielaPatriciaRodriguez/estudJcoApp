
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5HZ2_6IEEQ2yZSxdi4mJKlGMzGY7O2Mw",
  authDomain: "estudio-bravosalgado.firebaseapp.com",
  projectId: "estudio-bravosalgado",
  storageBucket: "estudio-bravosalgado.appspot.com",
  messagingSenderId: "291548696216",
  appId: "1:291548696216:web:e676d84db86cd027020aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
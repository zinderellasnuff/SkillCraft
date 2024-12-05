import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4V65Be5ZAVUD7MU4fBcgSq5FmKb_SBRk",
  authDomain: "skillcraft-4acf7.firebaseapp.com",
  projectId: "skillcraft-4acf7",
  storageBucket: "skillcraft-4acf7.appspot.com",
  messagingSenderId: "841094628458",
  appId: "1:841094628458:web:e54dc75611b3f325117613",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa auth y firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };

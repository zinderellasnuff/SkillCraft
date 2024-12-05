import React from "react";
import FirebaseContext from "./firebaseContext";
import { auth, firestore } from "../services/firebaseConfig";

const FirebaseProvider = ({ children }) => {
  if (!auth || !firestore) {
    console.error("Firebase no se inicializó correctamente.");
  }

  return (
    <FirebaseContext.Provider value={{ auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

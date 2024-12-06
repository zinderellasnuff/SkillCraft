import React, { useEffect } from "react";
import FirebaseContext from "./firebaseContext";
import { auth, firestore } from "../services/firebaseConfig";
import { seedDatabase } from "../../seed";

const FirebaseProvider = ({ children }) => {
  useEffect(() => {
    if (!auth || !firestore) {
      console.error("Firebase no se inicializó correctamente.");
      return;
    }
    // seedDatabase();
  }, []);

  return (
    <FirebaseContext.Provider value={{ auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

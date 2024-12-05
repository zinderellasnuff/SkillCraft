import React, { useEffect } from "react";
import FirebaseContext from "./firebaseContext";
import { auth, firestore } from "../services/firebaseConfig";

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

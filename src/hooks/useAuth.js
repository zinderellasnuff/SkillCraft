// src/hooks/useAuth.js

import { useContext } from "react";
import FirebaseContext from "../context/firebaseContext";

const useAuth = () => {
  const { firebase } = useContext(FirebaseContext);

  const doesUsernameExist = async (username) => {
    const firestore = firebase.firestore();
    try {
      const snapshot = await firestore
        .collection("users")
        .where("username", "==", username.toLowerCase())
        .get();
      return snapshot.docs;
    } catch (error) {
      console.error("Error checking username: ", error);
      return [];
    }
  };

  return { doesUsernameExist };
};

export default useAuth;

import { useContext } from "react";
import FirebaseContext from "../context/firebaseContext";

export const useFirebase = () => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error("useFirebase debe ser usado dentro de un FirebaseProvider");
  }

  return context;
};

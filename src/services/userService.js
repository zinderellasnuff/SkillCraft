import { collection, query, where, getDocs } from "firebase/firestore";

// Mantuvimos el nombre de la función 'doesUsernameExist'
export const doesUsernameExist = async (firestore, username) => {
  try {
    const q = query(
      collection(firestore, "users"),
      where("username", "==", username.toLowerCase())
    );
    const snapshot = await getDocs(q);
    return snapshot.docs; // Retorna los documentos encontrados
  } catch (error) {
    console.error("Error checking username: ", error);
    return []; // Devuelve un array vacío si hay error
  }
};

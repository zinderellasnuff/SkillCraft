import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

export const loadUserProfile = async (uid) => {
  if (!uid) {
    throw new Error("UID no definido");
  }

  try {
    const userDocRef = doc(firestore, "users", uid);
    const userDoc = await getDoc(userDocRef);

    // Datos por defecto para rellenar campos faltantes
    const defaultData = {
      username: "Usuario desconocido",
      behavior: "No especificado",
      courses: [],
      createdPost: "No especificado",
      degree: "No especificado",
      interests: [],
      mention: "No especificado",
      rating: 0,
      year: "No especificado",
    };

    if (userDoc.exists()) {
      console.log("Documento del usuario encontrado:", userDoc.data());
      const userData = userDoc.data();

      // Combinar los datos existentes con los valores predeterminados
      const completeUserData = { ...defaultData, ...userData };

      return completeUserData;
    }

    console.error(
      "El documento del usuario no existe. Devolviendo datos predeterminados."
    );
    return defaultData; // Devuelve valores por defecto si el documento no existe
  } catch (error) {
    console.error("Error al cargar el perfil del usuario:", error);
    throw error;
  }
};

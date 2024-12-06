import { doc, setDoc } from "firebase/firestore";

// Cambiar addDoc por setDoc si deseas usar `userId` como ID del documento
export function seedDatabase(firestore) {
  const users = [
    {
      userId: "6VEV9w3z2fTyB0Mlofy6JbMyHBc2",
      username: "sameer",
      lastName: "Kapadia",
      emailAddress: "Kapadia.sameer1@gmail.com",
      dateCreated: Date.now(),
      degree: "Ciencias de la Computación de la NUS",
      mention: "Mención en juegos 3D + Diseño interactivo",
      year: "Año 3",
      interests: ["3D Juegos", "Codificación"],
      createdPost: "Ayuda con mi trabajo ..",
      rating: 4.8,
      behavior: "Excelente",
      courses: ["CS3240", "IS3106", "IS4101"],
    },
  ];

  users.forEach(async (user) => {
    try {
      // Usar setDoc si prefieres usar el `userId` como ID de documento
      const userRef = doc(firestore, "users", user.userId);
      await setDoc(userRef, user);
      console.log("Usuario agregado con ID: ", user.userId);
    } catch (error) {
      console.error("Error al agregar el usuario: ", error);
    }
  });
}

import { collection, addDoc } from "firebase/firestore";

export function seedDatabase(firestore) {
  const users = [
    {
      userId: "dBw9lrmXcXhVEorP6vBAafqKqAc2",
      username: "sameer",
      lastName: "Kapadia",
      emailAddress: "Kapadia.sameer1@gmail.com",
      dateCreated: Date.now(),
    },
  ];

  users.forEach(async (user) => {
    try {
      const docRef = await addDoc(collection(firestore, "users"), user);
      console.log("Usuario agregado con ID: ", docRef.id);
    } catch (error) {
      console.error("Error al agregar el usuario: ", error);
    }
  });
}

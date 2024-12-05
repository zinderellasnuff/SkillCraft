import { collection, query, where, getDocs } from "firebase/firestore";

export const doesUsernameExist = async (firestore, username) => {
  try {
    const q = query(
      collection(firestore, "users"),
      where("username", "==", username.toLowerCase())
    );
    const snapshot = await getDocs(q);
    return snapshot.docs;
  } catch (error) {
    console.error("Error checking username: ", error);
    return [];
  }
};

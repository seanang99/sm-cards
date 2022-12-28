import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Firebase Collections
export const mvPacksCollectionRef = collection(db, "memory_pack");
export const versesCollectionRef = collection(db, "verses");

export const useVersesHook = () => {
  const useGetAllMvPacks = async () => {
    const data = await getDocs(
      query(mvPacksCollectionRef, orderBy("pack", "asc"))
    );
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  };

  const useGetVersesByPack = async (mvPack) => {
    const data = await getDocs(
      query(versesCollectionRef, where("memory_pack", "==", mvPack))
    );
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  };

  return {
    useGetAllMvPacks,
    useGetVersesByPack,
  };
};

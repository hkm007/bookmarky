import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";
import app from "../configs/firebase";

const db = getFirestore(app);

type Bookmark = {
  id: string;
  category: string | null;
  url: string;
};

export async function getAllBookmarks(): Promise<Array<Bookmark>> {
  let data: Array<Bookmark> = [];
  const q = query(collection(db, "bookmarks"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push({
      id: doc.id,
      category: doc.data().category,
      url: doc.data().url,
    });
  });
  return data;
}

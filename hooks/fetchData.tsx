import {
  doc,
  getDoc
} from "firebase/firestore";
import { db } from "../firebase";

export default async function fetchData(collection, id) {
  const docRef = doc(db, collection, id);
  const docFetched = await getDoc(docRef);
  const docData = docFetched.data();

  return { docData };
}

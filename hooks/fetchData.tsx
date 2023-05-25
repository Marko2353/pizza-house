import {
  DocumentData,
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default async function fetchData(collection, id) {
  const docRef = doc(db, collection, id);
  const docFetched = await getDoc(docRef);
  const docData = docFetched.data();

  return { docData };
  // let docRef = doc(db, collection, id);
  // let result;
  // let error = null;
  // try {
  //   result = await getDoc(docRef);
  // } catch (e) {
  //   error = e;
  // }
  // return { result, error };
}

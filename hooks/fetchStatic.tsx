import React, { useState, useEffect, useRef } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function useFetchStatic() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState<null | DocumentData>(null);
  const [description, setDescription] = useState<null | DocumentData>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const titleData = doc(db, "static", "landing");
        const descData = doc(db, "static", "landing");
        const titleFetched = await getDoc(titleData);
        const descFetched = await getDoc(descData);
        if (titleFetched.exists()) {
          setTitle(titleFetched.data());
        }
        if (descFetched.exists()) {
          setDescription(descFetched.data());
        }
      } catch (err) {
        setError("Failed to load Pizzas!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, title, description };
}

import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function useFetchPizzas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [descriptions, setDescriptions] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "pizzas", "descriptions");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDescriptions(docSnap.data());
        }
      } catch (err) {
        setError("Failed to load descriptions!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, descriptions };
}

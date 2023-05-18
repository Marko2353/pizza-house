import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function useFetchPizzas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "test");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
        }
        if (docSnap.exists) {
          console.log("lol");
        }
      } catch (err) {
        setError("Failed to load Pizzas!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, pizzas };
}

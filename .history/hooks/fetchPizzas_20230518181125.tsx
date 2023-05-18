import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function useFetchPizzas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pizzas, setPizzas] = useState(null);
  const [descriptions, setDescriptions] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "pizzas", "pizza");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPizzas(docSnap.data());
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

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "pizzas", "pizza");
        const docSnap = await getDoc(docRef);

        const docRef2 = doc(db, "pizzas", "descriptions");
        const docSnap2 = await getDoc(docRef2);

        if (docSnap.exists()) {
          setPizzas(docSnap.data());
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

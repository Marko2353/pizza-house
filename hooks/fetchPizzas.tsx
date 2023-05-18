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
        const pizzaData = doc(db, "pizzas", "pizza");
        const descData = doc(db, "pizzas", "descriptions");
        const pizzaFetched = await getDoc(pizzaData);
        const descFetched = await getDoc(descData);
        if (pizzaFetched.exists()) {
          setPizzas(pizzaFetched.data());
        }
        if (descFetched.exists()) {
          setDescriptions(descFetched.data());
        }
      } catch (err) {
        setError("Failed to load Pizzas!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, pizzas, descriptions };
}

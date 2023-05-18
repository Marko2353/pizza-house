"use client";
import useFetchPizzas from "../hooks/fetchPizzas";
import useFetchDescriptions from "../hooks/fetchDescriptions";
import React from "react";

export default function Home() {
  const { pizzas, loading, error } = useFetchPizzas();
  const { descriptions } = useFetchDescriptions();
  console.log(pizzas);

  if (pizzas === null || pizzas === undefined) {
    return <div>{loading}</div>;
  }
  return (
    <main>
      {Object.keys(pizzas).map((pizzaId) => {
        const pizzaName = pizzas[pizzaId];
        const pizzaDescription = descriptions[pizzaId];

        return (
          <div key={pizzaId}>
            <h1>{pizzaName}</h1>
            <p>{pizzaDescription}</p>
          </div>
        );
      })}
    </main>
  );
}

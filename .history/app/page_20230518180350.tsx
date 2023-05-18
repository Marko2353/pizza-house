"use client";
import useFetchPizzas from "../hooks/fetchPizzas";
import useFetchDescriptions from "../hooks/fetchDescriptions";
import React from "react";

export default function Home() {
  const { pizzas, loading } = useFetchPizzas();
  console.log(pizzas);

  const { descriptions, loading } = useFetchDescriptions();
  console.log(descriptions);

  if (pizzas === null || pizzas === undefined) {
    return <div>{loading}</div>;
  }
  return (
    <main>
    <div>
      <h1>Pizza Menu</h1>
      {Object.entries(pizzas).map(([id, name]) => (
        <div key={id}>
          <h2>{name}</h2>
        </div>
      ))}
      

    </div>
    </main>
  );
}

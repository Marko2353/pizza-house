"use client";
import useFetchPizzas from "../hooks/fetchz";
import React from "react";

export default function Home() {
  const { pizzas, loading, error } = useFetchPizzas();
  console.log(pizzas);

  if (pizzas === null || pizzas === undefined) {
    return <div>{loading}</div>;
  }
  return (
    <main>
      {pizzas.map((pizza, index) => (
        <div key={index}>
          <h1>{pizza}</h1>
          <p>{descriptions[index]}</p>
        </div>
      ))}
    </main>
  );
}

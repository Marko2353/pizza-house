"use client";
import useFetchPizzas from "../hooks/fetchDescriptions";
import React from "react";

export default function Home() {
  const { descriptions, loading, error } = fetchDescriptions();
  console.log(pizzas);

  if (pizzas === null || pizzas === undefined) {
    return <div>{loading}</div>;
  }
  return (
    <main>
      {Object.keys(pizzas).map((i) => {
        return (
          <>
            <h1>{pizzas[i]}</h1>
          </>
        );
      })}
    </main>
  );
}

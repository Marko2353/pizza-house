"use client";
import useFetchPizzas from "../hooks/fetchPizzas";
import React from "react";

export default function Home() {
  const { pizzas, loading, error } = useFetchPizzas();
  console.log(pizzas);
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

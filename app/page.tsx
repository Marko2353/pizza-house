"use client";
import useFetchPizzas from "../hooks/fetchPizzas";
import React from "react";

export default function Home() {
  const { pizzas, loading, error } = useFetchPizzas();
  console.log(pizzas);
  return (
    <main>
      {/* {pizzas.map((pizza, i) => {
        return (
          <>
            <h1 key={i}>{pizza}</h1>;
          </>
        );
      })} */}
    </main>
  );
}

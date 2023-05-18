"use client";
import useFetchPizzas from "../hooks/fetchPizzas";
import React from "react";
import Button from "../components/buttons/Button";

export default function Home() {
  const { pizzas, descriptions, loading, error } = useFetchPizzas();

  if (
    pizzas === null ||
    pizzas === undefined ||
    descriptions === null ||
    descriptions === undefined
  ) {
    return <div>{loading}</div>;
  }
  return (
    <main>

<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></button>
      <Button name={"pinga"} link={"/"} />
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

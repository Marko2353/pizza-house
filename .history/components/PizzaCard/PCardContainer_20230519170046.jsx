import React from "react";
import PizzaCard from "../PizzaCard/PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardContainer() {
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
    <>
      {Object.keys(pizzas).map((pizzaId) => {
        const pizzaName = pizzas[pizzaId];
        const pizzaDescription = descriptions[pizzaId];

        return (
        <div className="w-1/4 p-4">
          <PizzaCard
            pizzaName={pizzaName}
            pizzaDescription={pizzaDescription}
          />
          </div>
        );
      })}
    </>
  );
}

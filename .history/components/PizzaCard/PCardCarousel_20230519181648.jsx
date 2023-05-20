import React from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardCarousel() {
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
    <div className="container flex flex-wrap gap-4 m-auto">
      <>
        {Object.keys(pizzas).map((pizzaId) => {
          const pizzaName = pizzas[pizzaId];
          const pizzaDescription = descriptions[pizzaId];

          return (
            <PizzaCard
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
            />
          );
        })}
      </>
    </div>
  );
}

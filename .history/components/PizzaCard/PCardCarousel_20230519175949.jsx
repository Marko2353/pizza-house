import React from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardContainer() {
  const { pizzas, descriptions, loading, error } = useFetchPizzas();

export default function PCardCarousel() {
  return (
<div>
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
</div>
);
}


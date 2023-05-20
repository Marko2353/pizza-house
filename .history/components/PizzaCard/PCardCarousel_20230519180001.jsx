import React from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardCarousel() {
    const { pizzas, descriptions, loading, error } = useFetchPizzas();
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


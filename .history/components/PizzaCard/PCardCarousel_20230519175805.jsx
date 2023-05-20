import React from "react";
import PizzaCard from "./PizzaCard";

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

    
}

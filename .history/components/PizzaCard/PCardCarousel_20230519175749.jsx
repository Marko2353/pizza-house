import React from "react";


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

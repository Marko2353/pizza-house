import React from "react";


export default function PCardCarousel() {
  return (

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

}

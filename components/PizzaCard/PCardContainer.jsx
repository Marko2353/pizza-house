import React from "react";
import PizzaCard from "./PizzaCard";

export default function PCardContainer({ pizza }) {
  return (
    <div className="container flex flex-wrap gap-4 m-auto">
      <>
        {Object.keys(pizza.title).map((pizzaId) => {
          const pizzaName = pizza.title[pizzaId];
          const pizzaDescription = pizza.description[pizzaId];
          const pizzaPrice = pizza.price[pizzaId];

          return (
            <PizzaCard
              key={pizzaId}
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
            />
          );
        })}
      </>
    </div>
  );
}

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
            
            <div key={pizzaId}>
              <h1>{pizzaName}</h1>
              <p>{pizzaDescription}</p>
            </div>
          );
        })}
    
    </>

  );
}

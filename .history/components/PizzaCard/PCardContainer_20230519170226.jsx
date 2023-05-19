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
    
{Object.keys(pizzas).map((pizzaId, index) => {
  const pizzaName = pizzas[pizzaId];
  const pizzaDescription = descriptions[pizzaId];

  // Check if the current index is divisible evenly by 4
  const isNewRow = index % 4 === 0;

  // If it's a new row, start a new container
  if (isNewRow) {
    return (
      <div className="flex flex-row" key={pizzaId}>
        <PizzaCard
          pizzaName={pizzaName}
          pizzaDescription={pizzaDescription}
        />
      </div>
    );
  }

  // If it's not a new row, continue adding to the current container
  return (
    <PizzaCard
      pizzaName={pizzaName}
      pizzaDescription={pizzaDescription}
      key={pizzaId}
    />
  );
})}
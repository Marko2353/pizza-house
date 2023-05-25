import React from "react";
import PizzaCard from "./PizzaCard";
import fetchData from "../../hooks/fetchData";

export default async function PCardContainer() {
  const { docData } = await fetchData("pizzas", "pizza");

  return (
    <div className="container flex flex-wrap gap-4 m-auto">
      <>
        {Object.keys(docData?.title).map((pizzaId) => {
          const pizzaName = docData?.title[pizzaId];
          const pizzaDescription = docData?.description[pizzaId];

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

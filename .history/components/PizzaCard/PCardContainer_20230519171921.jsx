import React from "react";

import useFetchPizzas from "../../hooks/fetchPizzas";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";

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
    <div className="flex flex-wrap -mx-4">
      {Object.keys(pizzas).map((pizzaId) => {
        const pizzaName = pizzas[pizzaId];
        const pizzaDescription = descriptions[pizzaId];
    
        return (
          <div className="w-1/4 px-4">
    <div className="flex container">
                <div className="bg-light inline-block shadow-xl">
                  <h2 className="text-3xl mx-auto mb-8 my-2 text-center">
                    {pizzaName}
                  </h2>
                  <Image className="mx-auto mb-8" src={PizzaImg} alt="" />
                  <p className="mb-4 mx-8">{pizzaDescription}</p>
                </div>
              </div>
          </div>
        );
      })}
    </div>
    
        </>
  );
}

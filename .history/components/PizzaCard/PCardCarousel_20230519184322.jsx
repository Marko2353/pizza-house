import React, { useRef } from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardContainer() {
  const { pizzas, descriptions, loading, error } = useFetchPizzas();
  const carouselRef = useRef(null);

  if (
    pizzas === null ||
    pizzas === undefined ||
    descriptions === null ||
    descriptions === undefined
  ) {
    return <div>{loading}</div>;
  }

  const scrollToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container relative">
      <div className="flex overflow-x-auto" ref={carouselRef}>
        {Object.keys(pizzas).map((pizzaId) => {
          const pizzaName = pizzas[pizzaId];
          const pizzaDescription = descriptions[pizzaId];

          return (
            <PizzaCard
              key={pizzaId}
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
            />
          );
        })}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 focus:outline-none"
          onClick={scrollToPrevious}
        >
          Previous
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 focus:outline-none"
          onClick={scrollToNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

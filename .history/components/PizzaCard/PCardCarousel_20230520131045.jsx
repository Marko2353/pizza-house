import React, { useRef } from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";

export default function PCardCarousel() {
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

  const pizzaGroups = Object.keys(pizzas).reduce((result, pizzaId, index) => {
    if (index % 3 === 0) {
      result.push([]);
    }
    const pizzaName = pizzas[pizzaId];
    const pizzaDescription = descriptions[pizzaId];
    result[result.length - 1].push(
      <PizzaCard
        key={pizzaId}
        pizzaName={pizzaName}
        pizzaDescription={pizzaDescription}
      />
    );
    return result;
  }, []);

  return (
    <div className="container relative w-2/4 mx-auto">
      <div className="flex overflow-x-auto" ref={carouselRef}>
        {pizzaGroups.map((group, index) => (
          <div className={`flex ${index !== pizzaGroups.length - 1 ? "mr-4" : ""}`} key={index}>
            {group}
          </div>
        ))}
      </div>
      <div className="absolute transform -translate-y-1/2 top-1/2 left-4">
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
          onClick={scrollToPrevious}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
          onClick={scrollToNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

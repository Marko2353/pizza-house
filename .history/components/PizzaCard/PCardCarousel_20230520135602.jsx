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

  const pizzaCards = Object.keys(pizzas).map((pizzaId) => {
    const pizzaName = pizzas[pizzaId];
    const pizzaDescription = descriptions[pizzaId];
    return (
      <div className="flex mr-4 " key={pizzaId}>
        <PizzaCard pizzaName={pizzaName} pizzaDescription={pizzaDescription} />
      </div>
    );
  });

  return (
    <section className="container py-10 m-auto bg-dark">
      <h1 className="text-center">Our pizzas</h1>
      <p className="w-[60ch] mx-auto my-5 text-center text-light">
        Lorem ipsum dolor sit amet consectetur. Consectetur donec maecenas nisl
        pellentesque amet non. Pellentesque aliquam
      </p>
      <div className="relative">
        <div className="overflow-x-hidden" ref={carouselRef}>
          <div className="flex">{pizzaCards}</div>
        </div>
        <button
          className="absolute p-2 transform -translate-y-1/2 bg-gray-300 rounded-full top-1/2 left-4 hover:bg-gray-400 focus:outline-none"
          onClick={scrollToPrevious}
        >
          {"<"}
        </button>
        <button
          className="absolute p-2 transform -translate-y-1/2 bg-gray-300 rounded-full top-1/2 right-4 hover:bg-gray-400 focus:outline-none"
          onClick={scrollToNext}
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

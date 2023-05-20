import React from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";
import Slider from "react-slick";

export default function PCardContainer() {
  const { pizzas, descriptions, loading, error } = useFetchPizzas();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  if (
    pizzas === null ||
    pizzas === undefined ||
    descriptions === null ||
    descriptions === undefined
  ) {
    return <div>{loading}</div>;
  }
  return (
    <div className="container flex flex-wrap gap-4 m-auto">
      <>
        {Object.keys(pizzas).map((pizzaId) => {
          const pizzaName = pizzas[pizzaId];
          const pizzaDescription = descriptions[pizzaId];

          return (
            <Slider {...settings}>
            <PizzaCard
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
            /></Slider>
          );
        })}
      </>
    </div>
  );
}

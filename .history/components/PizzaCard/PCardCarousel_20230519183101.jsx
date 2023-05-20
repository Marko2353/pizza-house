import React from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";
import Slider from "react-slick";

import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

export default function PCardCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      
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
    <div className="">
      <>
        {Object.keys(pizzas).map((pizzaId) => {
          const pizzaName = pizzas[pizzaId];
          const pizzaDescription = descriptions[pizzaId];

          return (
            <Slider {...settings}>
            <PizzaCard className=""
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
            />
            </Slider>
          );
        })}
      </>
    </div>
  );
}

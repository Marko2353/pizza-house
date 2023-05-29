"use client";
import React, { useRef } from "react";
import PizzaCard from "./PizzaCard";
import Image from "next/image";
import Arrow from "../../public/img/arrow.svg";
import fetchData from "../../hooks/fetchData";

export default function PCardCarousel({ pizza }) {
  const carouselRef = useRef(null);

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

  const pizzaCards = Object.keys(pizza?.title).map((pizzaId) => {
    const pizzaName = pizza?.title[pizzaId];
    const pizzaDescription = pizza?.description[pizzaId];

    return (
      <div className="flex mr-4 " key={pizzaId}>
        <PizzaCard pizzaName={pizzaName} pizzaDescription={pizzaDescription} />
      </div>
    );
  });

  return (
    <section className="relative py-10 m-auto bg-dark">
      <h1 className="text-center">Our pizzas</h1>
      <p className="w-[60ch] mx-auto my-5 text-center text-light">
        Lorem ipsum dolor sit amet consectetur. Consectetur donec maecenas nisl
        pellentesque amet non. Pellentesque aliquam
      </p>
      <div className="absolute ml-56 transform -translate-y-1/2 left-4 top-1/2">
        <button
          className="p-2 rounded-full bg-dark hover:bg-gray-400 focus:outline-none"
          onClick={scrollToPrevious}
        >
          <Image src={Arrow} alt="" />
        </button>
      </div>
      <div className="container relative w-2/4 mx-auto">
        <div className="flex overflow-x-hidden" ref={carouselRef}>
          <div className="flex">{pizzaCards}</div>
        </div>
      </div>
      <div className="absolute mr-56 transform -translate-y-1/2 right-4 top-1/2">
        <button
          className="p-2 rounded-full bg-dark hover:bg-gray-400 focus:outline-none"
          onClick={scrollToNext}
        >
          <Image src={Arrow} alt="" className="transform rotate-180" />
        </button>
      </div>
    </section>
  );
}

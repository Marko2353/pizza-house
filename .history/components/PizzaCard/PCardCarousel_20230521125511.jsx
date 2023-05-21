import React, { useRef, useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";
import useFetchPizzas from "../../hooks/fetchPizzas";
import Image from "next/image";
import Arrow from "../../public/img/arrow.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


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

  const [staticData, setStaticData] = useState<{ [x: string]: any }[]>([]);

  const dbInstance = collection(db, "static");

  const getStatic = () => {
    getDocs(dbInstance).then((data) => {
      setStaticData(
        data.docs.map((item) => {
          return { ...item.data() };
        })
      );
    });
  };

  useEffect(() => {
    getStatic();
  }, []);

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
<section className="py-10 m-auto bg-dark relative">
          {staticData.map((data) => {
          return (
  <h1 className="text-center"></h1>
  <p className="w-[60ch] mx-auto my-5 text-center text-light">
    Lorem ipsum dolor sit amet consectetur. Consectetur donec maecenas nisl
    pellentesque amet non. Pellentesque aliquam
  </p>
            );
          })}
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 ml-56">
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
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 mr-56">
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

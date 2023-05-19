import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";

export default function PizzaCard({ pizzaName, pizzaDescription }) {
  return (
    <div className="flex flex-col bg-light shadow-xl">
      <h2 className="text-3xl mx-auto mb-8 my-2 text-center w-[10ch]">
        {pizzaName}
      </h2>
      <Image className="mx-auto mb-8" src={PizzaImg} alt="" />
      <p className="mb-4 mx-8 w-[20ch] text-center">{pizzaDescription}</p>
    </div>
  );
}

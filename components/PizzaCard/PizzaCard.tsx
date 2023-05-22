import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";

export default function PizzaCard({ pizzaName, pizzaDescription }) {
  return (
    <div className="flex flex-col bg-light shadow-xl p-5 gap-5">
      <h2 className="text-3xl h-20 mx-auto text-center w-[10ch]">
        {pizzaName}
      </h2>
      <Image src={PizzaImg} alt="" />
      <p className=" w-[20ch] text-center">{pizzaDescription}</p>
    </div>
  );
}

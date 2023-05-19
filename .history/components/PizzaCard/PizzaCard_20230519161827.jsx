import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
export default function PizzaCard() {
  return (
    <div className="bg-light inline-block shadow-lg hover:shadow-xl">
      <h2 className="text-3xl mx-auto mb-8 my-2 text-center">Margaritta</h2>
      <Image className="mx-auto mb-8" src={PizzaImg} alt="" />
      <p className="mb-4 mx-8">Tomato, mozzarella and basil</p>
    </div>
  );
}

"use client"
import React, { useState } from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
import Button from "../buttons/Button";

const PizzaCard = ({ pizzaId, pizzaName, pizzaDescription, price, onClick }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    onClick(pizzaId);
  };

  return (
    <div className="flex flex-col justify-between gap-5 p-5 shadow-xl bg-light rounded-xl">
      <h2 className="text-3xl h-20 mx-auto text-center w-[10ch]">
        {pizzaName}
      </h2>
      <Image src={PizzaImg} alt="" />
      <div className="flex flex-col justify-between gap-4">
        <p className="w-[20ch] text-center h-32">{pizzaDescription}</p>
        <span>Price: $ {price}</span>
        <button className="bg-primary" onClick={handleButtonClick}>
          Add to Cart
        </button>
        <p>
          Pizza ID: {pizzaId} | Click Count: {clickCount}
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;
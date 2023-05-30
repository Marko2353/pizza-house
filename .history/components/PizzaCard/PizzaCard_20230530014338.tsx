import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
import Button from "../buttons/Button";

export default function PizzaCard({
  pizzaName,
  pizzaDescription,
  price,
  click,
}) {
  return (
    <div className="flex flex-col bg-light shadow-xl p-5 gap-5 rounded-xl justify-between">
      <h2 className="text-3xl h-20 mx-auto text-center w-[10ch]">
        {pizzaName}
      </h2>
      <Image src={PizzaImg} alt="" />
      <div className="flex flex-col justify-between gap-4">
        <p className=" w-[20ch] text-center h-32">{pizzaDescription}</p>
        <span>Price: $ {price}</span>
        <Button name={"Order"} link={"/takeaway"} func={click} />
      </div>
    </div>
  );
}

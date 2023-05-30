import React from "react";
import { Product } from "../../interfaces";
import PizzaImg from "../../public/img/pizza_example.png";
import Image from "next/image";
import AddToCartBtn from "../buttons/AddToCartBtn";

interface Props {
  product: Product;
}
export const PizzaProduct = (props: Props) => {
  return (
    <div className="flex flex-col bg-light shadow-xl p-5 gap-5 rounded-xl justify-between">
      <h2 className="text-3xl h-20 mx-auto text-center w-[10ch]">
        {props.product.name}
      </h2>
      <Image src={PizzaImg} alt="" />
      <div className="flex flex-col justify-between gap-4">
        {/* <p className=" w-[20ch] text-center h-32">{undefined}</p> */}
        <span>Price: $ {props.product.price}</span>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

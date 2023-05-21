"use client";
import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import Image from "next/image";
import PizzaImg from "../../public/img/our_pizzas.png";
import Navbar from "../../components/Navbar/Navbar";


function OurPizzas() {
  return (
    <>
      <div className="pt-40">

        <div className="flex items-center justify-center">
          <h1 className="mr-36">Our pizzas</h1>
          <Image className="ml-36" src={PizzaImg} alt="" />
        </div>
        <p className="mx-auto w-[80ch] text-center my-16">
          Lorem ipsum dolor sit amet consectetur. Amet auctor orci elementum
          consectetur felis libero massa ac rhoncus. Ultrices sem ut nulla nec.
          Cursus varius at tincidunt fringilla diam neque euismod odio
          dignissim. Sagittis vitae feugiat aliquet nisl i
        </p>
      </div>
      <div className="mb-16">
        <PCardContainer />
      </div>
    </>
  );
}

export default OurPizzas;

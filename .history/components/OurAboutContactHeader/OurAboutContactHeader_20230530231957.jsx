import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/our_pizzas.png";

function OurPizzas({ title, description }) {
  return (
    <>
      <section className="container m-auto mb-5">
        <div className="flex items-center justify-between">
          <h1>3123{title}</h1>
          <Image src={PizzaImg} alt="" />
        </div>
        <p className="mx-auto w-[75ch] text-center my-16">{description}</p>
      </section>
    </>
  );
}

export default OurPizzas;

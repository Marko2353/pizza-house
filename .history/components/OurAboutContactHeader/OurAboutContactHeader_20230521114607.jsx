import React from "react";
import Image from "next/image";
import PizzaImg from "../../public/img/our_pizzas.png";

function OurPizzas({ title, description }) {
  return (
    <>
    
        <div className="flex items-center justify-center">
          <h1 className="mr-36">{title}</h1>
          <Image className="ml-36" src={PizzaImg} alt="" />
        </div>
        <p className="mx-auto w-[80ch] text-center my-16">{description}</p>
      </section>

    </>
  );
}

export default OurPizzas;

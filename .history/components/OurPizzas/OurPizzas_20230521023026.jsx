import React from "react";
import PCardContainer from "../PizzaCard/PCardContainer";
import Image from "next/image";

function OurPizzas() {
  return (
    <>
      <div className="">
        <h1>Our pizzas</h1>
        <Image className="mx-auto mb-8" src="../../public/img/our_pizzas.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet auctor orci elementum
          consectetur felis libero massa ac rhoncus. Ultrices sem ut nulla nec.
          Cursus varius at tincidunt fringilla diam neque euismod odio
          dignissim. Sagittis vitae feugiat aliquet nisl i
        </p>
      </div>
      <PCardContainer />
    </>
  );
}

export default OurPizzas;

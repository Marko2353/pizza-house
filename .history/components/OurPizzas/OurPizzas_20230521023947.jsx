import React from "react";
import PCardContainer from "../PizzaCard/PCardContainer";
import Image from "next/image";
import PizzaImg from "../../public/img/our_pizzas.png";

function OurPizzas() {
  return (
    <>
      <div className="pt-40">
      <div className="flex items-center justify-center">
  <h1 className="mr-4">Our pizzas</h1>
  <Image className="" src={PizzaImg} alt="" />
</div>
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

"use client";
import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import Navbar from "../../components/Navbar/Navbar";

function OurPizzas() {
  return (
    <>
      <div className="bg-dark w-full h-24 flex static">
        <Navbar />
      </div>
      <section className="my-10">
        <OurAboutContactHeader
          title={"Our pizzas"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Amet auctor orci elementum consectetur felis libero massa ac rhoncus. Ultrices sem ut nulla nec.Cursus varius at tincidunt fringilla diam neque euismod odio dignissim. Sagittis vitae feugiat aliquet nisl i"
          }
        />
        <PCardContainer />
      </section>
    </>
  );
}

export default OurPizzas;

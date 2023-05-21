"use client";
import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader"

function OurPizzas() {
  return (
    <>
      <section className="pt-40">
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

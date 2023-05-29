import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import Navbar from "../../components/Navbar/Navbar";
import fetchData from "../../hooks/fetchData";

async function OurPizzas() {
  const { docData } = await fetchData("static", "landing");
  const { pizzas } = await fetchData("pizzas", "pizza");

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="mb-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        <PCardContainer pizza={pizzas} />
      </section>
    </>
  );
}

export default OurPizzas;

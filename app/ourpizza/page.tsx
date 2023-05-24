"use client";
import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../page";
import fetchStatic from "../../hooks/fetchStatic";

function OurPizzas() {
  const { staticData } = fetchStatic();

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="mb-10">
        {staticData.map((data, key) => {
          return (
            <OurAboutContactHeader
              key={key}
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
        <PCardContainer />
      </section>
    </>
  );
}

export default OurPizzas;

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
      <div className="bg-dark w-full h-24 flex static">
        <Navbar />
      </div>
      <section className="my-10">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
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


import React from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../page";
import fetchStatic from "../../hooks/fetchStatic";
import fetchData from "../../hooks/fetchData";

async function OurPizzas() {
  const { docData } = await fetchData("static", "landing");

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="mb-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        {/* <PCardContainer /> */}
      </section>
    </>
  );
}

export default OurPizzas;

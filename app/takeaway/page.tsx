import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchData from "../../hooks/fetchData";
// import PCardContainer from "../../components/PizzaCard/PCardContainer";

export default async function Takeaway() {
  const { docData } = await fetchData("static", "landing");
  const { pizzas } = await fetchData("pizzas", "pizza");

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        <div className="container m-auto flex">
          {/* <PCardContainer pizza={pizzas} /> */}
          <div className="bg-dark text-light">
            <p className="w-64 h-64">aasdasf</p>
          </div>
        </div>
      </section>
    </>
  );
}

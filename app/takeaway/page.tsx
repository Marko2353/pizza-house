import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import fetchData from "../../hooks/fetchData";

export default async function Takeaway() {
  const { docData } = await fetchData("static", "landing");
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        <div className="container m-auto flex">
          <PCardContainer />
          <div className="bg-dark text-light">
            <p className="w-64 h-64">aasdasf</p>
          </div>
        </div>
      </section>
    </>
  );
}

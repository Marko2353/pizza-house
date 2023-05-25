import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import AboutSection from "../../components/AboutSection/AboutSection";
import fetchData from "../../hooks/fetchData";

export default async function About() {
  const { docData } = await fetchData("static", "landing");
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10 flex flex-col gap-20">
        <OurAboutContactHeader
          title={docData?.title[0]}
          description={docData?.description[0]}
        />
        <AboutSection
          title={docData?.title[4]}
          description={docData?.description[4]}
          style={"col-start-1 col-end-2"}
        />
        <AboutSection
          title={docData?.title[5]}
          description={docData?.description[5]}
          style={"col-start-2 col-end-3"}
        />
      </section>
    </>
  );
}

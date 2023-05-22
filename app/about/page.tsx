"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import AboutSection from "../../components/AboutSection/AboutSection";

export default function About() {
  const { staticData } = fetchStatic();
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10 flex flex-col gap-20">
        {staticData.map((data) => {
          return (
            <>
              <OurAboutContactHeader
                title={data.title[0]}
                description={data.description[0]}
              />
              <AboutSection
                title={data.title[4]}
                description={data.description[4]}
                style={"col-start-1 col-end-2"}
              />
              <AboutSection
                title={data.title[5]}
                description={data.description[5]}
                style={"col-start-2 col-end-3"}
              />
            </>
          );
        })}
      </section>
    </>
  );
}

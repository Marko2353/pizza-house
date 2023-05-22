'use client'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";

export default function About() {
  const { staticData } = fetchStatic();
  return (
    <>
      <div className="w-full h-24 bg-dark">
        <Navbar />
      </div>
      <section className="my-10">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
              title={data.title[1]}
              description={data.description[1]}
            />
          );
        })}
      </section>
    </>
  );
}

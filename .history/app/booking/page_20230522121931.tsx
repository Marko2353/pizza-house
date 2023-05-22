'use client'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import Hours from "../../components/buttons/Hours";

export default function Booking() {
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
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
<Hours />
      </section>
    </>
  );
}

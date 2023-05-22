"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import FormSection from "../../components/Form/FormSection";

export default function contact() {
  const { staticData } = fetchStatic();
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10 flex flex-col gap-20">
        {staticData.map((data) => {
          return (
            <>
              <OurAboutContactHeader
                title={data.title[1]}
                description={data.description[1]}
              />
              <FormSection
                title={data.title[6]}
                description={data.description[6]}
              />
            </>
          );
        })}
      </section>
    </>
  );
}

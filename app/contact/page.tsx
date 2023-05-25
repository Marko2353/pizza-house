import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import FormSection from "../../components/Form/FormSection";
import fetchData from "../../hooks/fetchData";

export default async function contact() {
  const { docData } = await fetchData("static", "landing");
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10 flex flex-col gap-20">
        <OurAboutContactHeader
          title={docData?.title[1]}
          description={docData?.description[1]}
        />
        <FormSection
          title={docData?.title[6]}
          description={docData?.description[6]}
        />
      </section>
    </>
  );
}

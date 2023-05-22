"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import BookingHours from "../../components/buttons/BookingHours";

export default function Booking() {
  const { staticData } = fetchStatic();
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
        <BookingHours />
      </section>
    </>
  );
}

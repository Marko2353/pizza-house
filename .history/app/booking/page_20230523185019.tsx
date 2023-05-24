"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import BookingHours from "./BookingHours";
import DateBooking from "./DateBooking";
import { NumberGuest } from "./NumberGuest";
import { BookingEmail } from "./BookingEmail";

export default function Booking() {
  const { staticData } = fetchStatic();
  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10 max-w-4xl mx-auto ">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
        
          <h3 className="pt-10 pb-5">Select a date/hour for booking a table:</h3>
          <DateBooking />
          <BookingHours />
          <h3 className="py-10">Number of guest:</h3>
          <NumberGuest />
          <h3 className="py-10">Contact email:</h3>
          <BookingEmail />
        
      </section>
    </>
  );
}

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
      <section className="my-10 max-w-6xl mx-auto ">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
        
          <h2 className="py-10">Select a date/hour for booking a table:</h2>
          <DateBooking />
          <BookingHours />
          <h2 className="py-10">Number of guest:</h2>
          <NumberGuest />
          <h2 className="py-10">Contact email:</h2>
          <BookingEmail />
        
      </section>
    </>
  );
}

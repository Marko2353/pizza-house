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
      <section className="max-w-4xl mx-auto my-10 ">
        {staticData.map((data) => {
          return (
            <OurAboutContactHeader
              title={data.title[3]}
              description={data.description[3]}
            />
          );
        })}
        
        <form onSubmit={handleSubmit}>
          <h3 className="pt-10 pb-5">Select a date/hour for booking a table:</h3>
          <DateBooking />
          <BookingHours />
          <h3 className="pt-10 pb-5">Number of guests:</h3>
          <NumberGuest />
          <h3 className="pt-10 pb-5">Contact email:</h3>
          <BookingEmail />
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
            Submit
          </button>
        </form>
        
      </section>
    </>
  );
}

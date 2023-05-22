'use client'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import BookingHours from "./BookingHours";
import DateBooking from "./DateBooking"
import { NumberGuest } from "./NumberGuest";
import { BookingEmail } from "./BookingEmail";
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
        <div className="container mx-auto">
        <h1 className='py-10'>Select a date/hour for booking a table:</h1>
        <DateBooking />
        <BookingHours />
        <h1 className='py-10'>Number of guest:</h1>
        <NumberGuest />
        <h1 className='py-10'>Contact email:</h1>
        <BookingEmail />
        </div>


      </section>
    </>
  );
}

'use client'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import BookingHours from "./BookingHours";
import DateBooking from "./DateBooking"

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
        
        </div>


      </section>
    </>
  );
}

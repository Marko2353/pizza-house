'use client'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchStatic from "../../hooks/fetchStatic";
import BookingHours from "../../components/buttons/BookingHours";
import DateBooking from "../../components/buttons/DateBooking"

export default function Booking() {
  const { staticData } = fetchStatic();
  return (
    <>
   
        <Navbar />

<DateBooking />
     
    </>
  );
}

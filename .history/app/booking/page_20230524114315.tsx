"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OurAboutContactHeader from '../../components/OurAboutContactHeader/OurAboutContactHeader';
import BookingHours from './BookingHours';
import DateBooking from './DateBooking';
import { NumberGuest } from './NumberGuest';
import { BookingEmail } from './BookingEmail';

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    selectedDate: null,
    selectedHour: null,
    numberOfGuests: 1,
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar los datos en el localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Realizar otras acciones (por ejemplo, enviar datos al servidor)

    // Reiniciar los campos del formulario
    setBookingData({
      selectedDate: null,
      selectedHour: null,
      numberOfGuests: 1,
      email: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar background={'bg-dark relative mb-10'} />
      <section className="max-w-4xl mx-auto my-10">
        <OurAboutContactHeader title="Booking" description="Make a reservation" />

        <form onSubmit={handleSubmit}>
          <h3 className="pt-10 pb-5">Select a date for booking a table:</h3>
          <DateBooking
            selectedDate={bookingData.selectedDate}
            onDateChange={(date) =>
              setBookingData((prevState) => ({
                ...prevState,
                selectedDate: date,
              }))
            }
          />

          <h3 className="pt-10 pb-5">Select an hour:</h3>
          <BookingHours
            selectedHour={bookingData.selectedHour}

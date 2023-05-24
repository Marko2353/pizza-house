"use client";
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OurAboutContactHeader from '../../components/OurAboutContactHeader/OurAboutContactHeader';
import BookingHours from './BookingHours';
import DateBooking from './DateBooking';
import { NumberGuest } from './NumberGuest';
import { BookingEmail } from './BookingEmail';
import { db } from '../../firebase';

export default function Booking() {
  const [formData, setFormData] = useState({
    selectedDate: new Date(),
    selectedHour: null,
    numberOfGuests: 1,
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleHourChange = (hour) => {
    setFormData({ ...formData, selectedHour: hour });
  };

  const handleNumberOfGuestsChange = (guests) => {
    setFormData({ ...formData, numberOfGuests: guests });
  };

  const handleEmailChange = (email) => {
    setFormData({ ...formData, email: email });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que todos los campos estén completos
    if (formData.selectedDate && formData.selectedHour && formData.email) {
      // Subir los datos a Firebase Firestore
      addDoc(collection(db, 'bookings'), formData)
        .then(() => {
          setFormSubmitted(true);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  };

  return (
    <>
      <Navbar background={'bg-dark relative mb-10'} />
      <section className="max-w-4xl mx-auto my-10 ">
        <OurAboutContactHeader title="Booking" description="Reserve a table" />

        <form onSubmit={handleSubmit}>
          <h3 className="pt-10 pb-5">Select a date/hour for booking a table:</h3>
          <DateBooking selectedDate={formData.selectedDate} onDateChange={handleDateChange} />
          <BookingHours selectedHour={formData.selectedHour} onHourChange={handleHourChange} />
          <h3 className="pt-10 pb-5">Number of guests:</h3>
          <NumberGuest
            numberOfGuests={formData.numberOfGuests}
            onNumberOfGuestsChange={handleNumberOfGuestsChange}
          />
          <h3 className="pt-10 pb-5">Contact email:</h3>
          <BookingEmail email={formData.email} onEmailChange={handleEmailChange} />

          <button type="submit" className="px-4 py-2 mt-5 text-white rounded-md bg-primary">
            Submit
          </button>
        </form>

        {formSubmitted && <p>Booking submitted successfully!</p>}
      </section>
    </>
  );
}

"use client";
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OurAboutContactHeader from '../../components/OurAboutContactHeader/OurAboutContactHeader';
import BookingHours from './BookingHours';
import DateBooking from './DateBooking';
import { NumberGuest } from './NumberGuest';
import { BookingEmail } from './BookingEmail';
import { db } from '../firebase';

export default function Booking() {
  const [formData, setFormData] = useState({
    selectedDate: null,
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
          {/* Resto del formulario */}
          <button type="submit" className="mt-8 btn-primary" disabled={!formData.selectedDate || !formData.selectedHour || !formData.email}>
            Submit
          </button>
        </form>

        {formSubmitted && <p>Booking submitted successfully!</p>}
      </section>
    </>
  );
}

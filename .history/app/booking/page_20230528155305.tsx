"use client";
import { collection, addDoc, setDoc } from 'firebase/firestore';
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OurAboutContactHeader from '../../components/OurAboutContactHeader/OurAboutContactHeader';
import BookingHours from './BookingHours';
import DateBooking from './DateBooking';
import { NumberGuest } from './NumberGuest';
import { BookingEmail } from './BookingEmail';
import { db } from '../../firebase';
import generateId from './generateId';

export default function Booking() {
  const [formData, setFormData] = useState({
    reservationId: '',
    selectedDate: new Date(),
    selectedHour: null,
    numberOfGuests: 1,
    email: '',
  });



  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bookingData');
    }
    return null;
  });

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

    if (formData.selectedDate && formData.selectedHour && formData.email) {
      const reservationId = generateId();
      if (typeof window !== 'undefined') {
        setFormData({ ...formData, reservationId: reservationId });
        localStorage.setItem('bookingData', JSON.stringify(formData));
      }
    
      setDoc(doc(db, 'bookings', reservationId), { ...formData, reservationId })
      .then(() => {
        setFormSubmitted(true);
        window.location.reload()
      })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }
  };


  const handleDelete = () => {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    const reservationId = bookingData.reservationId;

    deleteDoc(doc(db, 'bookings', reservationId))
      .then(() => {
        localStorage.removeItem('bookingData');
        setFormSubmitted(false);
        setFormData({
          reservationId: '',
          selectedDate: new Date(),
          selectedHour: null,
          numberOfGuests: 1,
          email: '',
        });
      })
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
  };

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="max-w-4xl mx-auto my-10 ">
        
      {!bookingData ? (
        <>
        <OurAboutContactHeader title="Booking" description="Reserve a table" />

        <form onSubmit={handleSubmit}>
          <h3 className="pt-10 pb-5">
            Select a date/hour for booking a table:
          </h3>
          <DateBooking
            selectedDate={formData.selectedDate}
            onDateChange={handleDateChange}
          />
          <BookingHours
            selectedHour={formData.selectedHour}
            onHourChange={handleHourChange}
          />
          <h3 className="pt-10 pb-5">Number of guests:</h3>
          <NumberGuest
            numberOfGuests={formData.numberOfGuests}
            onNumberOfGuestsChange={handleNumberOfGuestsChange}
          />
          <h3 className="pt-10 pb-5">Contact email:</h3>
          <BookingEmail
            email={formData.email}
            onEmailChange={handleEmailChange}
          />

          <button
            type="submit"
            className="px-4 py-2 mt-5 text-white rounded-md bg-primary"
          >
            Submit
          </button>
        </form>
        </>
     ):(
          <>
          
            <button
              onClick={handleDelete}
              className="px-4 py-2 mt-5 text-white bg-red-500 rounded-md"
            >
              Delete Reservation
            </button>
            <p className="mt-4">
              {bookingData}
            
              Booking details:
              <br />
              Date: {formData.selectedDate.toString()}
              <br />
              Hour: {formData.selectedHour}
              <br />
              Number of Guests: {formData.numberOfGuests}
              <br />
              Email: {formData.email}
            </p>
          </>
     )}
      </section>
    </>

  );
}
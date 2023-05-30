"use client";
import { setDoc, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import BookingHours from "./BookingHours";
import DateBooking from "./DateBooking";
import { NumberGuest } from "./NumberGuest";
import { BookingEmail } from "./BookingEmail";
import { db } from "../../firebase";
import generateId from "./generateId";

export default function Booking() {
  const [formData, setFormData] = useState({
    reservationId: "",
    selectedDate: new Date(),
    selectedHour: null,
    numberOfGuests: 1,
    email: "",
  });

  let updatedFormData = {};

  const [bookingData, setBookingData] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("bookingData");
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
      //setFormData({ ...formData, reservationId: reservationId });
      updatedFormData = { ...formData, reservationId };

      if (typeof window !== "undefined") {
        localStorage.setItem("bookingData", JSON.stringify(updatedFormData));
      }

      setDoc(doc(db, "bookings", reservationId), updatedFormData)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  const handleDelete = () => {
    const bookingDataString = localStorage.getItem("bookingData");
    const bookingData = bookingDataString
      ? JSON.parse(bookingDataString)
      : null;
    const reservationId = bookingData.reservationId;

    deleteDoc(doc(db, "bookings", reservationId))
      .then(() => {
        localStorage.removeItem("bookingData");

        setFormData({
          reservationId: "",
          selectedDate: new Date(),
          selectedHour: null,
          numberOfGuests: 1,
          email: "",
        });
        const parsedBookingData = JSON.parse(bookingData);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
      });
  };

  // Extracción de los datos de reserva
  let reservationId = "";
  let selectedDate = "";
  let selectedHour = "";
  let numberOfGuests = "";
  let email = "";

  if (bookingData) {
    const bookingDataArray = bookingData.split(",");
    reservationId = bookingDataArray[0].split(":")[1].replace(/"/g, "");
    selectedDate = bookingDataArray[1].split(":")[1].replace(/"/g, "");
    selectedHour = bookingDataArray[2].split(":")[1].replace(/"/g, "");
    numberOfGuests = bookingDataArray[3].split(":")[1];
    email = bookingDataArray[4].split(":")[1].replace(/"/g, "");
  }

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="max-w-4xl mx-auto my-10 ">
        {!bookingData ? (
          <>
            <OurAboutContactHeader
              title="Booking"
              description="Reserve a table"
            />

            <form onSubmit={handleSubmit}>
              <h2 className="pt-10 pb-5">
                Select a date/hour for booking a table:
              </h2>
              <DateBooking
                selectedDate={formData.selectedDate}
                onDateChange={handleDateChange}
              />
              <BookingHours
                selectedHour={formData.selectedHour}
                onHourChange={handleHourChange}
              />
              <h2 className="pt-10 pb-5">Number of guests:</h2>
              <NumberGuest
                numberOfGuests={formData.numberOfGuests}
                onNumberOfGuestsChange={handleNumberOfGuestsChange}
              />
              <h2 className="pt-10 pb-5">Contact email:</h2>
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
        ) : (
          <>
            <section>
              <h2 className="mt-4">Booking Details:</h2>
              <p className="my-10">Reservation ID: {reservationId}</p>
              <p className="my-10">Selected Date: {selectedDate}</p>
              <p className="my-10">Selected Hour: {selectedHour}</p>
              <p className="my-10">Number of Guests: {numberOfGuests}</p>
              <p className="my-10">Email: {email}</p>

              <button
                onClick={handleDelete}
                className="px-4 py-2 font-bold text-white uppercase bg-red-600 rounded-xl box-shadow"
              >
                Delete Reservation
              </button>
            </section>
          </>
        )}
      </section>
    </>
  );
}
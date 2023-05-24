import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import OurAboutContactHeader from '../../components/OurAboutContactHeader/OurAboutContactHeader';
import BookingHours from './BookingHours';
import DateBooking from './DateBooking';
import { NumberGuest } from './NumberGuest';
import { BookingEmail } from './BookingEmail';

export default function Booking() {
  const [formData, setFormData] = useState({
    selectedDate: null,
    selectedHour: null,
    numberOfGuests: 1,
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      setFormSubmitted(true);
    }
  }, []);

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
      // Guardar los datos en el local storage
      localStorage.setItem('bookingData', JSON.stringify(formData));
      setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <>
        <Navbar background={'bg-dark relative mb-10'} />
        <section className="max-w-4xl mx-auto my-10 ">
          <OurAboutContactHeader title="Booking" description="Reserve a table" />

          <p className="mt-4">
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
        </section>
      </>
    );
  }

  // Si no se ha enviado el formulario y no hay datos en el localStorage, muestra el formulario
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

          <button type="submit" className="mt-8 btn-primary" disabled={!formData.selectedDate || !formData.selectedHour || !formData.email}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

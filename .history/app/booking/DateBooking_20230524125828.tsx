import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateBooking({ selectedDate, onDateChange }) {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  const customInputStyle =
    'w-1/3 px-4 py-3 border rounded-md text-lg font-bold rounded-xl';

  return (
    <section className="container py-5 mx-auto">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        className={customInputStyle}
      />
    </section>
  );
}

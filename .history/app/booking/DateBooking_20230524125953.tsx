import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateBooking({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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

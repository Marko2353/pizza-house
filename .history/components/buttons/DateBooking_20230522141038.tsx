import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Calendar from 'react-calendar';

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center justify-center">
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        className="p-4 bg-white rounded-md shadow-md"
      />
    </div>
  );
}

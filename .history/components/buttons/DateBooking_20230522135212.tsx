import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        placeholderText="Click to select a date"
        selected={selectedDate}
        onChange={handleDateChange}
       
      />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>
  );
}

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customInputStyle = "";

  return (
    <div>
      <DatePicker
        
        placeholderText="Click to select a date"
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        className={customInputStyle}
      />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>
  );
}

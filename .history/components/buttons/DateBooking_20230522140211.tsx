import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customInputStyle = "flex, items-center, justify-center, h-screen, mt-4, y text-gray-600";

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

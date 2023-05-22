import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customInputStyle = "w-full px-3 py-2 border rounded-md";

  return (
    <div>
      <DatePicker
        showIcon
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

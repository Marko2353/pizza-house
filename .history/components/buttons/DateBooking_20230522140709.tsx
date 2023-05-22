import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customInputStyle =
    'w-64 h-10 px-3 py-2 border rounded-md text-gray-700 bg-white';

  const customCalendarContainerStyle =
    'flex items-center justify-center';


  return (
    <div className={customCalendarContainerStyle}>
      <DatePicker
        
        placeholderText="Click to select a date"
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
       
      />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>
  );
}

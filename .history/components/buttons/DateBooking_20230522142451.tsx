import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const customInputStyle = "w-1/3 px-4 py-3 border rounded-md text-xl font-bold";


  return (
    <section className="container mx-auto ">
      <div className="">
      <DatePicker
        
        placeholderText="Click to select a date"
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        className={customInputStyle}
      />
      </div>
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </section>
  );
}

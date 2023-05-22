import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      {/* Mostrar la fecha seleccionada */}
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>
  );
};


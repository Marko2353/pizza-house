import { useState } from 'react';

const BookingHours = () => {
  const [timeselected, setTimeselected] = useState(null);

  const generateHours = () => {
    const arrayHours = [];
    const startHour = 18;
    const startMinutes = ['00', '30'];

    for (let i = startHour; i <= 23; i++) {
      for (let j = 0; j < startMinutes.length; j++) {
        const hora = `${i}:${startMinutes[j]}`;
        arrayHours.push(hora);
      }
    }

    return arrayHours;
  };

  const arrayHours = generateHours();

  const selectHour = (eachHour) => {
    setTimeselected(eachHour);
  };

  return (
    <div>
      <h1>Select and hour for booking a table:</h1>
      <div className="grid grid-cols-3 gap-4">
        {arrayHours.map((eachHour) => (
          <button
            key={eachHour}
            className={`p-4 ${
              eachHour === timeselected ? 'bg-secondary text-white' : 'bg-gray-200'
            }`}
            onClick={() => selectHour(eachHour)}
          >
            {eachHour}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingHours;

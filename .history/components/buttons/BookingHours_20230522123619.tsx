import { useState } from 'react';

const BookingHours = () => {
  const [timeselected, setTimeselected] = useState(null);

  const generateHours = () => {
    const eachHour = [];
    const startHour = 18;
    const startMinutes = ['00', '30'];

    for (let i = startHour; i <= 23; i++) {
      for (let j = 0; j < startMinutes.length; j++) {
        const hoursminutes = `${i}:${startMinutes[j]}`;
        eachHour.push(hoursminutes);
      }
    }

    return eachHour;
  };

  const eachHour = generateHours();

  const seleccionarHora = (hora) => {
    setTimeselected(hora);
  };

  return (
    <div>
      <h1>Selecciona una hora:</h1>
      <div className="grid grid-cols-3 gap-4">
        {eachHour.map((hora) => (
          <button
            key={hora}
            className={`p-4 ${
              hora === timeselected ? 'bg-secondary text-white' : 'bg-gray-200'
            }`}
            onClick={() => seleccionarHora(hora)}
          >
            {hora}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingHours;

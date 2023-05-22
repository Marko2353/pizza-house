import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedHour, setSelectedHour] = useState('');

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes acceder al valor de la hora seleccionada en `selectedHour`
    console.log('Hora seleccionada:', selectedHour);

    // Resto del código de envío a la base de datos de Firebase y guardado localmente
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Componente de selección de hora */}
      <div>
        <label htmlFor="hour-selector" className="block mb-2 text-lg font-medium">
          Select Hour:
        </label>
        <select
          id="hour-selector"
          value={selectedHour}
          onChange={handleHourChange}
          className="w-1/6 px-4 py-3 text-xl font-bold border rounded-md"
        >
          <option value="">Select an hour</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          {/* Agrega más opciones de hora según tus necesidades */}
        </select>
      </div>

      <button type="submit" className="px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-500 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;

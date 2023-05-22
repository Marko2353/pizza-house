import React, { useState } from 'react';
import BookingHours from './BookingHours';

const BookingForm = () => {
  const [selectedHour, setSelectedHour] = useState('');

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes acceder al valor de la hora seleccionada en `selectedHour`
    console.log('Hora seleccionada:', selectedHour);

    // Resto del código de envío a la base de datos de Firebase y guardado localmente
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Resto de los componentes */}
      <BookingHours handleHourChange={handleHourChange} />
      {/* Resto del formulario */}
    </form>
  );
};

export default BookingForm;

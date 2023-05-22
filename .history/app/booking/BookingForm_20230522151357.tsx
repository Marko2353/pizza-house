import React, { useState, useEffect } from 'react';
import BookingHours from './BookingHours';

const BookingForm = () => {
  const [selectedHour, setSelectedHour] = useState('');
  const [submittedHour, setSubmittedHour] = useState('');

  useEffect(() => {
    // Recuperar la hora de reserva almacenada en el almacenamiento local
    const storedHour = localStorage.getItem('selectedHour');
    if (storedHour) {
      setSelectedHour(storedHour);
      setSubmittedHour(storedHour);
    }
  }, []);

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar la hora de reserva en el almacenamiento local
    localStorage.setItem('selectedHour', selectedHour);

    // Mostrar la hora de reserva después del envío
    setSubmittedHour(selectedHour);

    // Resto del código de envío a la base de datos de Firebase

    // Limpiar el formulario después del envío
    setSelectedHour('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Resto de los componentes */}
      <BookingHours handleHourChange={handleHourChange} />
      {/* Resto del formulario */}
      
      {/* Botón de enviar */}
      <button type="submit" className="px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-500 rounded-md">
        Submit
      </button>

      {/* Mostrar la hora de reserva después del envío */}
      {submittedHour && <p>Submitted Hour: {submittedHour}</p>}
    </form>
  );
};

export default BookingForm;

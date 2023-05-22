import { useState } from 'react';

const Hours = () => {
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  const generarHoras = () => {
    const horas = [];
    const horaInicial = 18;
    const minutos = ['00', '30'];

    for (let i = horaInicial; i <= 23; i++) {
      for (let j = 0; j < minutos.length; j++) {
        const hora = `${i}:${minutos[j]}`;
        horas.push(hora);
      }
    }

    return horas;
  };

  const horas = generarHoras();

  const seleccionarHora = (hora) => {
    setHoraSeleccionada(hora);
  };

  return (
    <div>
      <h1>Selecciona una hora:</h1>
      <div className="grid grid-cols-3 gap-4">
        {horas.map((hora) => (
          <button
            key={hora}
            className={`p-4 ${
              hora === horaSeleccionada ? 'bg-blue-500 text-white' : 'bg-gray-200'
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

export default Hours;

import { useState } from "react";

export const BookingHours = () => {
  const [timeselected, setTimeselected] = useState(null);

  const generateHours = () => {
    const arrayHours = [];
    const startHour = 18;
    const startMinutes = ["00", "30"];

    for (let i = startHour; i <= 23; i++) {
      for (let j = 0; j < startMinutes.length; j++) {
        const eachHour = `${i}:${startMinutes[j]}`;
        arrayHours.push(eachHour);
      }
    }

    return arrayHours;
  };

  const arrayHours = generateHours();

  const selectHour = (eachHour) => {
    setTimeselected(eachHour);
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {arrayHours.map((eachHour) => (
          <button
            key={eachHour}
            className={`p-3 ${
              eachHour === timeselected
                ? "bg-secondary text-light font-bold"
                : "bg-gray-200"
            }`}
            onClick={() => selectHour(eachHour)}
          >
            {eachHour}
          </button>
        ))}
      </div>
    </section>
  );
};

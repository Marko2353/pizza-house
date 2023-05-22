import React, { useState } from 'react';

export const NumberGuest = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 10) {
      setNumberOfGuests(value);
    }
  };

  return (
    <div>
      <label htmlFor="number-selector" className="block mb-2 text-lg font-medium">
        Number of Guests:
      </label>
      <div className="relative">
        <div
          id="number-selector"
          contentEditable
          onBlur={handleBlur}
          ref={inputRef}
          className="w-24 px-3 py-2 text-xl font-bold border rounded-md"
        >
          {numberOfGuests}
        </div>
        <span className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-3">
          guest
        </span>
      </div>
    </div>
  );
};


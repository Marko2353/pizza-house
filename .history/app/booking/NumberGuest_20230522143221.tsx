import React, { useState } from 'react';

export const NumberSelector = () => {
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
      <input
        id="number-selector"
        type="number"
        min="1"
        max="10"
        value={numberOfGuests}
        onChange={handleNumberChange}
        className="w-24 px-3 py-2 border rounded-md"
      />
    </div>
  );
};

export default NumberSelector;

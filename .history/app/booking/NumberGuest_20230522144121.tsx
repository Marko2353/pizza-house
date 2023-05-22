import React, { useState } from 'react';

export const NumberGuest = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleNumberChange = (e) => {
    setNumberOfGuests(numberOfGuests);
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
        className="w-1/6 px-4 py-3 text-xl font-bold border rounded-md"
        
    
      />
      <p>{NumberGuest}</p>
    </div>
  );
};


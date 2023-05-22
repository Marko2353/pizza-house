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
      <input
        id="number-selector"
        type="number"
        min="1"
        max="10"
        value={numberOfGuests}
        onChange={handleNumberChange}
        className="w-1/6 px-4 py-3 text-xl font-semibold border rounded-md"
        
    
      />
    </div>
  );
};


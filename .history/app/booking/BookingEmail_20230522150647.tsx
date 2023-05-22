import React, { useState } from 'react';

export const BookingEmail = () => {
  const [email, setEmail] = useState('Hello');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="w-1/4 px-4 py-3 text-xl font-semibold border rounded-md"
      />
    </div>
  );
};

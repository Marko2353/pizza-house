import React from 'react';

export const BookingEmail = ({ email, onEmailChange }) => {
  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };

  return (
    <div>
      <input
        id="email-input"
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={handleEmailChange}
        className="w-1/4 px-4 py-3 text-lg font-semibold border rounded-xl"
      />
    </div>
  );
};

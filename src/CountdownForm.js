import React, { useState } from "react";

const CountdownForm = ({ setTargetDate }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) setTargetDate(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your target date:</label>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default CountdownForm;

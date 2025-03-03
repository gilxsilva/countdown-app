import React, { useState } from "react";
import "./App.css";
import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";

function App() {
  const [targetDate, setTargetDate] = useState(null);

  return (
    <div>
      <h1>Countdown App ⏳</h1>
      <CountdownForm setTargetDate={setTargetDate} />
      {targetDate && <Countdown targetDate={targetDate} />}
    </div>
  );
}

export default App;

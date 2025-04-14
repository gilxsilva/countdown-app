import React, { useState, useEffect } from "react";
import "./App.css";
import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";

function App() {
  const [targetDate, setTargetDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getMotivationalMessage = () => {
    if (!targetDate) return "";

    const hoursLeft = (targetDate - currentTime) / (1000 * 60 * 60);

    if (hoursLeft <= 0) return "🎉 It's time!";
    if (hoursLeft < 1) return "⏳ It's almost time!";
    if (hoursLeft < 24) return "🎉 Just a few more hours!";
    if (hoursLeft < 72) return "💪 You're getting close!";
    return "📅 Stay focused and keep going!";
  };

  return (
    <div>
      <h1>Countdown App ⏳</h1>

      <p>⏰ Current time: {currentTime.toLocaleTimeString()}</p>

      <CountdownForm setTargetDate={setTargetDate} />
      {targetDate && <Countdown targetDate={targetDate} />}
      {targetDate && <p className="motivation">{getMotivationalMessage()}</p>}
    </div>
  );
}

export default App;

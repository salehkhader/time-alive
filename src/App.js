import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [timeOfBirth, setTimeOfBirth] = useState("");
  const [timeAlive, setTimeAlive] = useState(null);

  useEffect(() => {
    if (dateOfBirth && timeOfBirth) {
      const interval = setInterval(() => {
        const birthDateTime = new Date(dateOfBirth + "T" + timeOfBirth + ":00");
        const currentTime = new Date();
        const diff = currentTime - birthDateTime;
        setTimeAlive(diff);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dateOfBirth, timeOfBirth]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Time You've Been Alive</h1>
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Time of Birth:
            <input
              type="time"
              value={timeOfBirth}
              onChange={(e) => setTimeOfBirth(e.target.value)}
            />
          </label>
        </div>
        {timeAlive !== null && (
          <div>
            <h2>You've been alive for:</h2>
            <p>{Math.floor(timeAlive / (1000 * 60 * 60 * 24))} days</p>
            <p>{Math.floor((timeAlive / (1000 * 60 * 60)) % 24)} hours</p>
            <p>{Math.floor((timeAlive / (1000 * 60)) % 60)} minutes</p>
            <p>{Math.floor((timeAlive / 1000) % 60)} seconds</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

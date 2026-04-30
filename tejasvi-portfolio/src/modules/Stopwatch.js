import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = ({ setResult }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      // Speed yahan 1000ms (1 second) kar di gayi hai
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setResult("Stopwatch: Started ✔️");
    } else {
      setResult("Stopwatch: Paused ⏸️");
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]); // Laps bhi reset ho jayenge
    setResult("Stopwatch: Reset 🔄");
  };

  // Flag button ka function (Data record karne ke liye)
  const handleFlag = () => {
    const currentLap = formatTime(time);
    setLaps([...laps, currentLap]);
    setResult("Lap recorded! 🚩");
  };

  const formatTime = (timeInMs) => {
    const hours = Math.floor(timeInMs / 360000).toString().padStart(2, "0");
    const minutes = Math.floor((timeInMs % 360000) / 6000).toString().padStart(2, "0");
    const seconds = Math.floor((timeInMs % 6000) / 100).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <div className="stopwatch-top-icon">
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path fill="#3b82f6" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V13L16.5,16.25L17.25,15L12.5,12.15V6H11Z" />
          </svg>
        </div>

        <div className="stopwatch-header">
          <h2>Stopwatch</h2>
          <p>PRECISION TIMING</p>
        </div>

        <div className="stopwatch-display">
          <h1>{formatTime(time)}</h1>
        </div>

        <div className="stopwatch-controls">
          <button className={`control-btn start-pause-btn ${isRunning ? 'paused' : ''}`} onClick={handleStartPause}>
            {isRunning ? (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
            )}
          </button>

          {/* Flag Button - Ab Data Record karega */}
          <button className="control-btn flag-btn" onClick={handleFlag}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" /></svg>
          </button>

          <button className="control-btn reset-btn" onClick={handleReset}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>
          </button>
        </div>

        {/* Lap/Data Record List */}
        <div className="lap-list">
          {laps.map((lap, index) => (
            <div key={index} className="lap-item">
              <span>Lap {index + 1}</span>
              <strong>{lap}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
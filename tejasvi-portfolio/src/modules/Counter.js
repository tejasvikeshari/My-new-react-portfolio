import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ setResult }) => {
  const [count, setCount] = useState(0);

  const updateCount = (val) => {
    const newCount = count + val;
    setCount(newCount);
    setResult(`Current State: ${newCount}`);
  };

  const reset = () => {
    setCount(0);
    setResult("State Reset to Zero");
  };

  return (
    <div className="counter-full-page">
      <div className="counter-card-glow">
        {/* Top Icon */}
        <div className="counter-icon-box">
          <span className="plus-minus-symbol">±</span>
        </div>

        {/* Header */}
        <div className="counter-header">
          <h2>State Counter</h2>
          <p>Managing real-time numeric logic</p>
        </div>

        {/* Display Number */}
        <div className="counter-display">
          <h1>{count}</h1>
        </div>

        {/* Buttons Grid */}
        <div className="counter-actions">
          <button className="btn-minus" onClick={() => updateCount(-1)}>−</button>
          <button className="btn-plus" onClick={() => updateCount(1)}>+</button>
        </div>

        {/* Reset Option */}
        <div className="counter-footer">
          <button className="reset-link" onClick={reset}>INITIALIZE ZERO</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
import React, { useState } from 'react';
import './PrimeChecker.css';

const PrimeChecker = ({ setResult, closeModal }) => {
  const [num, setNum] = useState("");

  const checkPrime = (e) => {
    e.preventDefault();
    const n = parseInt(num);
    if (isNaN(n)) {
      setResult("Please enter a valid number! ⚠️");
      return;
    }
    
    if (n <= 1) {
      setResult(`${n} is NOT a prime number. ❌`);
      return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      setResult(`Yes! ${n} is a PRIME number. 🌟`);
    } else {
      setResult(`${n} is NOT a prime number. ❌`);
    }
  };

  return (
    <div className="prime-container">
      <div className="prime-card">
        {/* Chip/CPU Icon jaisa photo mein hai */}
        <div className="prime-icon">
          <svg viewBox="0 0 24 24" width="60" height="60">
            <path fill="#fbbf24" d="M15,9H9V15H15V9M13,13H11V11H13V13M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.89,19 7,19H9V21H11V19H13V21H15V19H17C18.1,19 19,18.1 19,17V15H21V13H19V11H21M17,17H7V7H17V17Z" />
          </svg>
        </div>

        <div className="prime-header">
          <h2>Prime Validator</h2>
          <p>Testing Mathematical Integrity</p>
        </div>

        <form onSubmit={checkPrime} className="prime-form">
          <input 
            type="number" 
            placeholder="Enter a number" 
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <button type="submit" className="validate-btn">
            VALIDATE NUMBER
          </button>
        </form>

        <div className="prime-footer">
           
        </div>
      </div>
    </div>
  );
};

export default PrimeChecker;
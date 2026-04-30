import React, { useState } from 'react';
import './Palindrome.css';

const Palindrome = ({ setResult, closeModal }) => {
  const [text, setText] = useState("");

  const checkPalindrome = (e) => {
    e.preventDefault();
    const cleanStr = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    
    if (cleanStr === "") {
      setResult("Please enter some text!");
    } else if (cleanStr === reversedStr) {
      setResult(`"${text}" is a Palindrome! ✅`);
    } else {
      setResult(`"${text}" is NOT a Palindrome! ❌`);
    }
  };

  return (
    <div className="palin-container">
      <div className="palin-card">
        <div className="palin-icon">
          <svg viewBox="0 0 24 24" width="60" height="60">
            <path fill="#d946ef" d="M17.65,6.35C16.2,4.9 14.21,4 12,4c-4.42,0-7.99,3.58-7.99,8s3.57,8 7.99,8c3.73,0 6.84-2.55 7.73-6h-2.08c-0.82,2.33-3.04,4-5.65,4c-3.31,0-6-2.69-6-6s2.69-6 6-6c1.66,0 3.14,0.69 4.22,1.78L13,11h7V4L17.65,6.35z"/>
          </svg>
        </div>

        <div className="palin-header">
          <h2>Palindrome Scanner</h2>
          <p>Checking Mirror Logic Stability</p>
        </div>

        <form onSubmit={checkPalindrome} className="palin-form">
          <input 
            type="text" 
            placeholder="Enter text (e.g. Madam)" 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="scan-btn">
            EXECUTE SCAN
          </button>
        </form>

        <div className="palin-footer">
           {/* Card ke andar wala button ab logic band karega */}
    
        </div>
      </div>
    </div>
  );
};

export default Palindrome;
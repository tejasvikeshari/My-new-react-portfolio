import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({ setResult }) => {
  const [input, setInput] = useState("");

  const handleClick = (val) => setInput(prev => prev + val);
  const clear = () => setInput("");
  const backspace = () => setInput(input.slice(0, -1));

  const calculate = () => {
    try {
      let finalExpr = input.replace(/π/g, Math.PI).replace(/x²/g, "**2");
      const res = eval(finalExpr);
      setInput(res.toString());
      setResult(`Result: ${res}`);
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="logic-calc-box">
        {/* Screen Area */}
        <div className="screen-area">
          <div className="display-val">{input || "0"}</div>
        </div>

        {/* Buttons Grid */}
        <div className="buttons-layout">
          {/* Row 1 */}
          <button className="blue-text" onClick={() => handleClick('Math.sqrt(')}>√</button>
          <button className="blue-text" onClick={() => handleClick('**2')}>x²</button>
          <button className="blue-text" onClick={() => handleClick('π')}>π</button>
          <button className="red-ac" onClick={clear}>AC</button>

          {/* Row 2 */}
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="orange-text" onClick={() => handleClick('/')}>÷</button>

          {/* Row 3 */}
          <button onClick={() => handleClick('4')}>4</button>
          <button className="active-num" onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="orange-text" onClick={() => handleClick('*')}>×</button>

          {/* Row 4 */}
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="orange-text" onClick={() => handleClick('-')}>-</button>

          {/* Row 5 */}
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button className="orange-text" onClick={() => handleClick('+')}>+</button>
          <button className="orange-text" onClick={backspace}>⌫</button>

          {/* Row 6 */}
          <button className="equal-wide" onClick={calculate}>=</button>
          <button className="blue-text" onClick={() => handleClick('(')}>(</button>
          <button className="blue-text" onClick={() => handleClick(')')}>)</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
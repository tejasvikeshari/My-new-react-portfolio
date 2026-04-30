import React, { useState, useEffect } from 'react';

// 1. Calculator with Advanced Logic
export const Calculator = () => {
  const [val, setVal] = useState("");
  const handle = (b) => {
    if(b === "=") { try { setVal(eval(val).toString()); } catch { setVal("Error"); } }
    else if(b === "C") setVal("");
    else setVal(val + b);
  };
  return (
    <div className="mod-box calculator">
      <div className="display-screen">{val || "0"}</div>
      <div className="btn-grid">
        {["7","8","9","/", "4","5","6","*", "1","2","3","-", "0","C","=","+"].map(b => (
          <button className="calc-btn" key={b} onClick={() => handle(b)}>{b}</button>
        ))}
      </div>
    </div>
  );
};

// 2. Pro Stopwatch
export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (active) { interval = setInterval(() => setTime((t) => t + 10), 10); } 
    else { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [active]);
  const format = () => {
    const ms = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const sec = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    return `${sec}:${ms}`;
  };
  return (
    <div className="mod-box">
      <h2 className="timer-text">{format()}</h2>
      <button className="action-btn" onClick={() => setActive(!active)}>{active ? "Stop" : "Start"}</button>
      <button className="action-btn reset" onClick={() => {setTime(0); setActive(false)}}>Reset</button>
    </div>
  );
};

// 3. Palindrome with Real-time Analysis
export const Palindrome = () => {
  const [txt, setTxt] = useState("");
  const check = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '') === s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
  return (
    <div className="mod-box">
      <input className="mod-input" placeholder="Check Palindrome..." onChange={e => setTxt(e.target.value)} />
      <div className={`status ${check(txt) && txt ? "success" : "fail"}`}>
        {txt ? (check(txt) ? "✨ Palindrome Confirmed" : "❌ Not a Palindrome") : "Waiting for input..."}
      </div>
    </div>
  );
};

// 4. Prime Number (Sieve Logic)
export const Prime = () => {
  const [num, setNum] = useState("");
  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return n > 1;
  };
  return (
    <div className="mod-box">
      <input type="number" className="mod-input" placeholder="Check Prime..." onChange={e => setNum(e.target.value)} />
      <p className="res-txt">{num && (isPrime(num) ? "🎯 It's a Prime Number" : "🚫 Not a Prime")}</p>
    </div>
  );
};

// 5. Armstrong Number
export const Armstrong = () => {
  const [num, setNum] = useState("");
  const check = (n) => {
    let sum = 0, temp = n, len = n.toString().length;
    while(temp > 0) { sum += Math.pow(temp % 10, len); temp = Math.floor(temp/10); }
    return sum === parseInt(n);
  };
  return (
    <div className="mod-box">
      <input type="number" className="mod-input" placeholder="Check Armstrong..." onChange={e => setNum(e.target.value)} />
      <p className="res-txt">{num && (check(num) ? "🌟 Armstrong Found" : "❌ Regular Number")}</p>
    </div>
  );
};

// 6. Todo with Delete
export const Todo = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const add = () => { if(task) { setItems([...items, task]); setTask(""); } };
  return (
    <div className="mod-box">
      <div className="flex">
        <input className="mod-input" value={task} onChange={e => setTask(e.target.value)} />
        <button className="add-btn" onClick={add}>Add</button>
      </div>
      <ul className="todo-list">
        {items.map((it, i) => <li key={i}>{it} <span onClick={() => setItems(items.filter((_, idx) => idx !== i))}>🗑️</span></li>)}
      </ul>
    </div>
  );
};

// 7. Login Validation
export const Login = () => {
  const [form, setForm] = useState({user: '', pass: ''});
  const handle = () => {
    if(form.user === "admin" && form.pass === "1234") alert("Login Success!");
    else alert("Invalid Credentials");
  };
  return (
    <div className="mod-box">
      <input className="mod-input" placeholder="User: admin" onChange={e => setForm({...form, user: e.target.value})} />
      <input className="mod-input" type="password" placeholder="Pass: 1234" onChange={e => setForm({...form, pass: e.target.value})} />
      <button className="login-btn" onClick={handle}>Secure Login</button>
    </div>
  );
};

// 8. Weather API Mock
export const Weather = () => (
  <div className="mod-box weather-ui">
    <h3>Prayagraj, IN</h3>
    <div className="temp">32°C</div>
    <p>Humidity: 45% | Wind: 12km/h</p>
  </div>
);

// 9. Theme Switcher (System Level)
export const ThemeSwitch = () => {
  const toggle = () => document.body.classList.toggle('dark-mode');
  return <button className="theme-btn" onClick={toggle}>🌙 Toggle Dark/Light</button>;
};

// 10. Counter Pro
export const Counter = () => {
  const [c, setC] = useState(0);
  return (
    <div className="mod-box">
      <h1 className="count-display">{c}</h1>
      <div className="flex-gap">
        <button onClick={() => setC(c+1)} className="count-btn">+</button>
        <button onClick={() => setC(c-1)} className="count-btn">-</button>
        <button onClick={() => setC(0)} className="count-btn reset">Reset</button>
      </div>
    </div>
  );
};

// 11. Currency Converter
export const Currency = () => {
  const [usd, setUsd] = useState(0);
  return (
    <div className="mod-box">
      <label>USD to INR</label>
      <input type="number" className="mod-input" onChange={e => setUsd(e.target.value)} />
      <div className="conv-res">₹ {(usd * 83.45).toFixed(2)}</div>
    </div>
  );
};

// 12. Google Maps Embed
export const Maps = () => (
  <div className="mod-box">
    <iframe title="map" width="100%" height="200" src="https://maps.google.com/maps?q=prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
  </div>
);
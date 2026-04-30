import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Dashboard.css';

// Modules - Maine yahan spelling 'Registration' kar di hai. 
// Please apni file ka naam bhi 'Registration.js' hi rakhna.
import Login from '../modules/Login';
import Registration from '../modules/Registration'; 
import Counter from '../modules/Counter';
import Calculator from '../modules/Calculator';
import Palindrome from '../modules/Palindrome';
import PrimeChecker from '../modules/PrimeChecker';
import Weather from '../modules/Weather';
import Stopwatch from '../modules/Stopwatch';
import GoogleMap from '../modules/GoogleMap';
import ThemeSwitcher from '../modules/ThemeSwitcher';

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const modules = [
    { id: 'login', title: 'Login Portal', icon: '🔐', desc: 'Secure user authentication system' },
    { id: 'reg', title: 'Registration Form', icon: '📝', desc: 'New user registration & validation' },
    { id: 'calc', title: 'Calculator', icon: '🧮', desc: 'Advanced arithmetic operations' },
    { id: 'count', title: 'Counter', icon: '🔢', desc: 'Real-time state management tool' },
    { id: 'palin', title: 'Palindrome Checker', icon: '🔄', desc: 'Check for mirror-image strings' },
    { id: 'prime', title: 'Prime Tester', icon: '🧪', desc: 'Mathematical number validation' },
    { id: 'weather', title: 'Weather Forecast', icon: '🌦️', desc: 'Live atmospheric data fetcher' },
    { id: 'stop', title: 'Stopwatch', icon: '⏱️', desc: 'Millisecond accurate stopwatch' },
    { id: 'map', title: 'Google Map', icon: '📍', desc: 'Interactive geographic mapping' },
    { id: 'theme', title: 'Theme Switcher', icon: '🌓', desc: 'Dynamic light & dark mode toggle' }
  ];

  return (
    <div className="dash-main">
      {!activeModal ? (
        <div className="hub-view">
          <nav className="dash-nav">
            <button className="home-btn" onClick={() => navigate('/')}>
               🏠 Back to Home
            </button>
          </nav>
          <div className="hub-header">
            <h1>Logic Modules...</h1>
            <p>Select a module to explore its functionality and execute powerful logic seamlessly within the system</p>
          </div>
          <div className="module-grid">
            {modules.map(m => (
              <div key={m.id} className="module-card">
                <div className="m-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p className="m-desc-text">{m.desc}</p>
                <button className="exec-btn" onClick={() => {setResult(""); setActiveModal(m.id)}}>
                  EXECUTE 
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="execution-canvas">
          <div className="canvas-header">
            <button className="back-link-red" onClick={() => setActiveModal(null)}>
              ← 🏠Back to Dashboard
            </button>
          </div>
          <div className="canvas-content-body">
            {activeModal === 'reg' && <Registration setResult={setResult} />}
            {activeModal === 'login' && <Login setResult={setResult} />}
            {activeModal === 'calc' && <Calculator setResult={setResult} />}
            {activeModal === 'count' && <Counter setResult={setResult} />}
            {activeModal === 'palin' && <Palindrome setResult={setResult} />}
            {activeModal === 'prime' && <PrimeChecker setResult={setResult} />}
            {activeModal === 'weather' && <Weather setResult={setResult} />}
            {activeModal === 'stop' && <Stopwatch setResult={setResult} />}
            {activeModal === 'map' && <GoogleMap setResult={setResult} />}
            {activeModal === 'theme' && <ThemeSwitcher setResult={setResult} />}
            
            {/* Dashboard.js ke niche jahan result show hota hai, ye line replace karein */}
{result && (
  <div className="floating-success">
    {result}
  </div>
)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
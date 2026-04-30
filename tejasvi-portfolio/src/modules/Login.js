import React from 'react';
import './Login.css';

const Login = ({ setResult }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("Access Initialized Successfully! ✅");
  };

  return (
    <div className="login-container">
      <div className="login-card-premium">
        <div className="glow-overlay"></div>
        <div className="login-icon-box">
          <span className="key-icon">🔑</span>
        </div>
        <h2>Secure Login</h2>
        <p className="subtitle">Enter your credentials to access LogicCore</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group-premium">
            <input type="text" placeholder="Username/Email" required />
            <span className="bar"></span>
          </div>
          <div className="input-group-premium">
            <input type="password" placeholder="Password" required />
            <span className="bar"></span>
          </div>
          
          <button type="submit" className="login-btn-premium">
            <span>INITIALIZE ACCESS</span>
            <div className="btn-glow"></div>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
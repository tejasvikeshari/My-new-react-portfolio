import React, { useState } from 'react';
import './Registration.css';

const Registration = ({ setResult }) => {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setResult("ACCESS GRANTED • SYSTEM INITIALIZED ✅");
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <div className="reg-page-container">
      <div className="reg-main-card">
        <h2>System Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="avatar-section">
            <label htmlFor="p-file" className="avatar-frame">
              {preview ? <img src={preview} alt="Profile" style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} /> : 
              <>
                <span style={{fontSize:'2rem', marginBottom:'5px'}}>+</span>
                <span>Upload Photo</span>
              </>}
            </label>
            <input id="p-file" type="file" hidden onChange={handleImage} />
          </div>

          <div className="reg-form-grid">
            <input type="text" placeholder="FULL NAME" required />
            <input type="email" placeholder="EMAIL ADDRESS" required />
            <input type="tel" placeholder="PHONE NUMBER" required />
            <input type="date" />
            <select className="custom-select">
              <option value="">GENDER</option>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
            <input type="text" placeholder="LOCATION" />
            <input type="password" placeholder="PASSWORD" required />
            <input type="password" placeholder="CONFIRM" required />
          </div>
          <button type="submit" className="final-reg-btn">Registration Access</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
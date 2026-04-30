import React from 'react';
import './ThemeSwitcher.css';
import { FaPalette, FaBolt, FaGhost, FaCloud, FaHeart } from 'react-icons/fa';
import { IoDiamondOutline } from 'react-icons/io5';
import { GiForest } from 'react-icons/gi';
import { MdWaterDrop, MdLightMode } from 'react-icons/md';
import { BsSunFill, BsFillGearFill } from 'react-icons/bs';

const ThemeSwitcher = ({ setResult, closeModal }) => {

  
const changeTheme = (colorCode, message) => {
  // Hum poori 'body' ko nahi, sirf module ke wrapper ko target kar rahe hain
  const moduleContainer = document.querySelector('.atmosphere-overlay');
  if (moduleContainer) {
    moduleContainer.style.backgroundColor = colorCode;
  }
  setResult(`Atmosphere Updated: ${message}`);
};
  return (
    <div className="atmosphere-overlay">
      <div className="atmosphere-side-glow"></div>

      <div className="atmosphere-container">
        <div className="atmosphere-card">
          <div className="atmosphere-top-icon-wrapper">
            <FaPalette className="atmosphere-top-icon" />
          </div>

          <div className="atmosphere-header">
            <h2>Switch The Theme</h2>
            <p>ATMOSPHERE</p>
          </div>

          <div className="atmosphere-grid">
            <button className="theme-btn neon-blue" onClick={() => changeTheme('#0d1117', 'NeonBlue', 'Neon Blue Active! ⚡')}>
              <FaBolt /> Neon Blue
            </button>
            <button className="theme-btn cyber-purple" onClick={() => changeTheme('#1a0b2e', 'CyberPurple', 'Cyber Purple Active! 👾')}>
              <FaGhost /> Cyber Purple
            </button>
            
            <button className="theme-btn sunset-red" onClick={() => changeTheme('#2b0b0b', 'SunsetRed', 'Sunset Red Active! 🌇')}>
              <BsSunFill /> Sunset Red
            </button>
            <button className="theme-btn emerald" onClick={() => changeTheme('#064e3b', 'Emerald', 'Emerald Active! 💎')}>
              <IoDiamondOutline /> Emerald
            </button>
            
            <button className="theme-btn gold-night" onClick={() => changeTheme('#453305', 'GoldNight', 'Gold Night Active! ✨')}>
              <BsFillGearFill /> Gold Night
            </button>
            <button className="theme-btn forest-edge" onClick={() => changeTheme('#062e03', 'ForestEdge', 'Forest Edge Active! 🌲')}>
              <GiForest /> Forest Edge
            </button>
            
            <button className="theme-btn deep-rose" onClick={() => changeTheme('#2e0310', 'DeepRose', 'Deep Rose Active! 🌹')}>
              <FaHeart /> Deep Rose
            </button>
            <button className="theme-btn oceanic" onClick={() => changeTheme('#042f2e', 'Oceanic', 'Oceanic Active! 🌊')}>
              <MdWaterDrop /> Oceanic
            </button>
            
            <button className="theme-btn sky-light" onClick={() => changeTheme('#1f2937', 'SkyLight', 'Sky Light Active! ☁️')}>
              <FaCloud /> Sky Light
            </button>
          </div>

          <div className="special-button-row">
            <button className="theme-btn ghost-white" onClick={() => changeTheme('#ffffff', 'GhostWhite', 'Ghost White Active! ✨')}>
              <MdLightMode /> Ghost White
            </button>
          </div>

          <div className="atmosphere-footer">
            <button className="back-link-atmosphere" onClick={closeModal}>
              ← Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
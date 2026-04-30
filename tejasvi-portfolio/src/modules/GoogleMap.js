import React, { useState } from 'react';
import './GoogleMap.css';

const GoogleMap = () => {
  const [city, setCity] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const handleSearch = () => {
    // Ye Google Maps ka direct embed URL hai
    setMapUrl(`https://www.google.com/maps?q=${city}&output=embed`);
  };

  return (
    <div className="map-container">
      <div className="map-card">
        <div className="map-header">
          <div className="icon">🗺️</div>
          <h2>Explorer Maps</h2>
        </div>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Enter city (e.g. Agra)..." 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>

        <div className="map-view">
          {mapUrl ? (
            <iframe 
              title="map"
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            />
          ) : (
            <div className="map-placeholder">Search to load map...</div>
          )}
        </div>

        <button className="return-btn" onClick={() => window.history.back()}>
          ← Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default GoogleMap;
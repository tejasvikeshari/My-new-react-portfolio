import React, { useState } from 'react';
import './Weather.css';

const Weather = ({ setResult, closeModal }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const API_KEY = "ac1f4a74f884671921bc48108ece59fe"; 
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      }
    } catch (err) { console.log(err); }
  };

  return (
    <div className="weather-wrapper">
      <div className="weather-card-wide">
        <div className="status-tag">Live Data Active</div>

        <form onSubmit={fetchWeather} className="search-box-row">
          <input 
            type="text" 
            placeholder="Search City (e.g. Agra)" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="search-btn-blue">🔍</button>
        </form>

        {weatherData && (
          <div className="weather-main-data">
            <h2 className="city-name-display">{weatherData.name.toUpperCase()}</h2>
            <p className="sky-status">{weatherData.weather[0].description}</p>
            <h1 className="temp-hero">{Math.round(weatherData.main.temp)}°C</h1>

            <div className="stats-footer">
              <div className="stat-unit">
                <span className="blue-icon">💧</span>
                <div className="stat-num">{weatherData.main.humidity}%</div>
                <div className="stat-txt">HUMIDITY</div>
              </div>
              <div className="stat-unit">
                <span className="blue-icon">🍃</span>
                <div className="stat-num">{weatherData.wind.speed} km/h</div>
                <div className="stat-txt">WIND SPEED</div>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Weather;
import React, { useState } from 'react';
import getForecast from './Forecast';

const ForecastForm = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");

  const uriEncodedCity = encodeURIComponent(city);

  return (
    <div>
    <form onSubmit={ getForecast }>
      <input
        type="text"
        placeholder="Enter city"
        maxLength="50"
        value={ city }
        onChange={ (e) => setCity(e.target.value)} 
      />
      <label>
        <input
          type="radio"
          name="units"
          checked={ unit === "imperial"}
          value="imperial"
          onChange={ (e) => setUnit(e.target.value)} 
        />
        Fahrenheit
      </label>
      <label>
        <input
          type="radio"
          name="units"
          checked={ unit === "metric"}
          value="metric"
          onChange={ (e) => setUnit(e.target.value)} 
        />
        Celcius
      </label>
      <button type="submit>">Get Forecast</button>
    </form>
  </div>
  )
}

export default ForecastForm;
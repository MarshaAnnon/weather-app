import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
  let [ city, setCity ] = useState("");
  let [ unit, setUnit ] = useState("imperial");
  let [ resObj, setResObj ] = useState({});

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "5e07d5ec86mshaec91845041a3b4p133e69jsncae261294a03",
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }
    })
    .then(res => res.json())
    .then(res => {
      setResObj(res)
    })
    .catch(err => {
	    console.error(err);
    })
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
        <div>
          {JSON.stringify(resObj)}
        </div>
        <form onSubmit={ getForecast }>
          <input
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={(e) => setUnit(e.target.value)}
            /> Fahrenheit
          </label>
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
            /> Celsius
          </label>
          <button type="submit">Get Forecast</button>
        </form>
        < Conditions resObj={resObj} />
    </div>
  )
}

export default Forecast;
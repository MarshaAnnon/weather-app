import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
  let [ city, setCity ] = useState("");
  let [ unit, setUnit ] = useState("imperial");
  let [ resObj, setResObj ] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] =useState(false);

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    if (city.length <= 0) {
      return setError(true);
    }
    //clear the state in prep. for new data
    setError(false);
    setResObj({});

    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "5e07d5ec86mshaec91845041a3b4p133e69jsncae261294a03",
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }
    })
    .then(res => res.json())
    .then(res => {
      if (res.cod !== 200) {
        throw new Error()
      }
      setResObj(res);
      setLoading(false);
    })
    .catch(err => {
      setError(true);
      setLoading(false);
      console.log(err.message);
    });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
        <div>
          {/* {JSON.stringify(resObj)} */}
        </div>
        <form onSubmit={ getForecast }>
          <input
            className={classes.textInput}
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label className={classes.radio}>
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={(e) => setUnit(e.target.value)}
            /> Fahrenheit
          </label>
          <label className={classes.radio}>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
            /> Celsius
          </label>
          <button 
            className={classes.button}
            type="submit">
              Get Forecast
          </button>
        </form>
        < Conditions 
          resObj={resObj}
          error={error}
          loading={loading} />
    </div>
  )
}

export default Forecast;
import React, { useState } from 'react';

const Forecast = () => {
  let [ resObject, setResObject ] = useState({});

  function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=newyork,ny", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5e07d5ec86mshaec91845041a3b4p133e69jsncae261294a03",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(res ={
  setResObject(res)
})
.catch(err => {
	console.error(err);
});
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>
        {JSON.stringify(resObj)}
      </div>
      <button onClick={ getForecast }>
        Get Forecast
      </button>
    </div>
  )
}

export default Forecast;
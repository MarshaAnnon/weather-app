import React from 'react'
 
const Conditions = (props) => {
  return (
    <div>
      { props.resObj.cod === 200 ?
        <div>
          <p><strong>{ props.resObj.name }</strong></p>
          <p>It's currently { Math.round(props.resObj.main.temp) } degrees with { props.resObj.weather[0].description }.</p>
          <p>It feels like { Math.round(props.resObj.main.feels_like)} degrees</p>
          <p>Humidity is { props.resObj.main.humidity}</p>
        </div>
        : null
      }
    </div>
  )
 }
 
 export default Conditions;
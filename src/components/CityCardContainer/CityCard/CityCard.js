import React from 'react';

import './CityCard.css'

const cityCard = ({ temp, humidity, pressure, maxTemp, minTemp, cityName }) => (
  <div className="card">
    <span className="close">x</span>
    <p>City: {cityName} </p>
    <ul>
      <li>Temp: {temp}</li>
      <li>Humidity: {humidity}</li>
      <li>Pressure: {pressure}</li>
      <li>MaxTemp: {maxTemp}</li>
      <li>MinTemp: {minTemp}</li>
    </ul>
  </div>
);

export default cityCard;
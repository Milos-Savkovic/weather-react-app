import React from 'react';

import './CityCard.css';
// import { Card } from 'antd';

const cityCard = ({
  temp,
  humidity,
  pressure,
  maxTemp,
  minTemp,
  cityName,
  removeCityHandler
}) => (
  <div className="card">
    <span className="close" onClick={removeCityHandler}>
      x
    </span>
    <p style={{ display: 'flex' }}>City: {cityName} </p>
    <ul>
      <li>Temp: {temp}</li>
      <li>Humidity: {humidity}</li>
      <li>Pressure: {pressure}</li>
      <li>MaxTemp: {maxTemp}</li>
      <li>MinTemp: {minTemp}</li>
    </ul>
  </div>
  // <Card title={cityName} className="card">
  //   <p>Temp: {temp}</p>
  //   <p>Humidity: {humidity}</p>
  //   <p>Pressure: {pressure}</p>
  //   <p>MaxTemp: {maxTemp}</p>
  //   <p>MinTemp: {minTemp}</p>
  // </Card>
);

export default cityCard;

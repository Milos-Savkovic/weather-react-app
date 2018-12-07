import React from 'react';

import './CityCard.css';
import { Card } from 'antd';

const cityCard = ({
  id,
  temp,
  humidity,
  pressure,
  maxTemp,
  minTemp,
  cityName,
  removeCityHandler
}) => (
  <div className="card-wrapper">
    <Card title={cityName} className="card">
      <p>Temp: {temp}</p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
      <p>MaxTemp: {maxTemp}</p>
      <p>MinTemp: {minTemp}</p>
    </Card>
    <span className="close" onClick={() => removeCityHandler(id)}>
      x
    </span>
  </div>
);

export default cityCard;

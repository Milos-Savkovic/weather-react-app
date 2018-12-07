import React from 'react';

import './CityCardContainer.css';
import CityCard from './CityCard/CityCard';

const CardContainer = ({ showCard, weatherData, removeCityHandler }) => (
  <div className="container">
    {weatherData.map(weatherCity => {
      return (
        <CityCard
          key={weatherCity.id}
          id={weatherCity.id}
          temp={weatherCity.weather}
          humidity={weatherCity.humidity}
          pressure={weatherCity.pressure}
          maxTemp={weatherCity.maxTemp}
          minTemp={weatherCity.minTemp}
          cityName={weatherCity.cityName}
          removeCityHandler={removeCityHandler}
        />
      );
    })}
  </div>
);

export default CardContainer;

import React from 'react';

import './CityCardContainer.css';
import CityCard from './CityCard/CityCard';

const CardContainer = ({ showCard, weatherData, removeCityHandler }) => (
  <div className="container">
    {/* { showCard ?
   <CityCard
        temp={temp}
        humidity={humidity}
        pressure={pressure}
        maxTemp={maxTemp}
        minTemp={minTemp}
        cityName={cityName}
      /> : null
    } */}
    {weatherData.map(weatherCity => {
      return (
        <CityCard
          temp={weatherCity.weather}
          humidity={weatherCity.humidity}
          pressure={weatherCity.pressure}
          maxTemp={weatherCity.maxTemp}
          minTemp={weatherCity.minTemp}
          cityName={weatherCity.cityName}
          key={weatherCity.id}
          removeCityHandler={removeCityHandler}
          // removeCityHandler={() removeCityHandler(index)}
        />
      );
    })}
  </div>
);

export default CardContainer;

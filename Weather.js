import React, { Component } from 'react';

import '../App.css';
import UserForm from '../components/UserForm/User';
import axios from 'axios';
import CardContainer from '../components/CityCardContainer/CityCardContainer';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=9c032a32e98184017aa37fbf6e37538a';

class App extends Component {
  state = {
    weather: null,
    humidity: null,
    pressure: null,
    maxTemp: null,
    minTemp: null,
    cityName: null,
    error: null,
    showCard: false
  };

  componentWillMount() {
    return this.getWeather
  }
  
  render() {
    const getWeather = e => {
      e.preventDefault();
      const weatherCity = e.target.elements.weatherValue.value;
      if (weatherCity) {
        axios
          .get(URL + weatherCity + apiKey)
          .then(response => {
            const {
              data: {
                main: { temp, humidity, pressure, temp_max, temp_min }
              }
            } = response;
            const weather = Math.round(temp - 273.15);
            const cityHumidity = Math.round(humidity);
            const cityPressure = Math.round(pressure);
            const maxTemp = Math.round(temp_max - 273.15);
            const minTemp = Math.round(temp_min - 273.15);
            const cityName = response.data.name;
            // console.log(response) treba mi ovdje grad sa api-a da izvucem
            this.setState({
              weather,
              humidity: cityHumidity,
              pressure: cityPressure,
              maxTemp,
              minTemp,
              cityName
            });
            // console.log(this.state.weather)
            // console.log('this.state', this.state)
            const cityStatus = {
              weather,
              cityHumidity,
              cityPressure,
              maxTemp,
              minTemp,
              cityName
            };
  
            this.setState({ showCard: true });
  
            axios
              .post('https://weather-app-add29.firebaseio.com/cities.json', {
                cityStatus
              })
              .then(res => {
                // console.log(res)
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            this.setState({ error });
          });
      } else return;
    };
  
    const getCity = ( ) => {
      axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://weather-app-add29.firebaseio.com/cities.json`
      )
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => {
        console.log('response', res);
        const weatherData = Object.keys(res)
        console.log(weatherData)
      })
      .catch(error => {
        console.log('error', error);
      });
    }

    const {
        weather,
        humidity,
        pressure,
        maxTemp,
        minTemp,
        cityName,
        showCard
    } = this.state;
    return (
      <div style={{ color: 'black ' }}>
        <UserForm getWeather={getWeather} getCity={this.getCity} />
        {weather ? (
          <p>Temperature is: {weather} °C</p>
        ) : (
          <p>Please enter your city.</p>
        )}
        <CardContainer
          temp={weather}
          humidity={humidity}
          pressure={pressure}
          maxTemp={maxTemp}
          minTemp={minTemp}
          cityName={cityName}
          showCard={showCard}
        />
      </div>
    );
  }
}

export default App;

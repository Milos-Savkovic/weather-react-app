import React, { Component } from 'react';

import '../App.css';
import UserForm from '../components/UserForm/User';
import axios from 'axios';
import CardContainer from '../components/CityCardContainer/CityCardContainer';
import Spinner from '../components/Spinner/Spinner';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=9c032a32e98184017aa37fbf6e37538a';

class App extends Component {
  state = {
    showCard: false,
    weatherData: [],
    loading: false,
    searchValue: ''
  };

  componentWillMount() {
    this.getCity();
  }
  render() {
    const {
      state: { showCard, weatherData, loading, searchValue },
      getWeather,
      handleSearchInput
    } = this;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="main-wrapper">
        <UserForm
          getWeather={getWeather}
          handleSearchInput={handleSearchInput}
          searchValue={searchValue}
        />
        <CardContainer
          weatherData={weatherData}
          showCard={showCard}
          removeCityHandler={this.removeCityHandler}
        />
      </div>
    );
  }

  handleSearchInput = event => {
    this.setState({ searchValue: event.target.value });
  };

  removeCityHandler = id => {
    console.log('You just clicked me', id);
    this.setState({ loading: true });
    axios
      .delete(`https://weather-app-add29.firebaseio.com/cities/${id}.json`)
      .then(response => {
        if (response.status === 200) {
          return this.getCity();
        }
        this.setState({ loading: false });
      });

    // const dataId = [...this.state.weatherData];
  };

  getWeather = e => {
    e.preventDefault();
    const {
      state: { searchValue: weatherCity },
      getCity
    } = this;

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
              if (res.status === 200) getCity();
            })
            .catch(error => {
              console.log('ERROR', error);
            });
        })
        .catch(error => {
          this.setState({ error });
        });
    } else return;
  };

  getCity = () => {
    this.setState({ loading: true });
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://weather-app-add29.firebaseio.com/cities.json`
      )
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        // console.log('GET CITY RESPONSE', response);
        const { data = null } = response;
        if (data) {
          const weatherData = Object.keys(data).map(key => {
            // console.log('DATA [KEY]', data[key]);
            // console.log(
            //   'DATA KEY CITY STATUS PRESSURE PRESSURE',
            //   data[key].cityStatus
            // );
            return {
              id: key,
              weather: data[key].cityStatus.weather,
              humidity: data[key].cityStatus.cityHumidity,
              pressure: data[key].cityStatus.cityPressure,
              maxTemp: data[key].cityStatus.maxTemp,
              minTemp: data[key].cityStatus.minTemp,
              cityName: data[key].cityStatus.cityName
            };
          });
          // console.log('GET CITY WEATHERDATA', weatherData);
          this.setState({ weatherData: weatherData.reverse(), loading: false });
          console.log(
            'THIS STATE WEATHERDATA DATA WEATHERDATA',
            this.state.weatherData
          );
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}

export default App;

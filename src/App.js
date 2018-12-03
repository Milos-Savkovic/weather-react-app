import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Weather';
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
// import Error from './components/Error/Error'
// import Navigation from './components/Navigation/Navigation'

// const URL = 'https://api.github.com/users/'

class App extends Component {
  // state = {
  //   weather: null,
  //   error: null
  // }

  // getWeather = (e) => {
  //   e.preventDefault();
  //   const weatherCity = e.target.elements.weatherValue.value
  //   if (weatherCity) {
  //     axios.get(URL + weatherCity + apiKey)
  //       .then(response => {
  //         const weather = response.data //treba mi ovdje grad sa api-a da izvucem
  //         this.setState({ weather })
  //         console.log(this.state.weather)
  //       })
  //       .catch(error => {
  //         this.setState({ error })
  //       })
  //   } else return;
  // }

  // let apiKey = '9c032a32e98184017aa37fbf6e37538a'
  // let city = 'portland';
  // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  //http://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=9c032a32e98184017aa37fbf6e37538a

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather forecast</h1>
          <Home />
          {/* <BrowserRouter>
        <div>
          <Navigation />
              <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
            </Switch>
        </div>
          </BrowserRouter> */}
        </header>
      </div>
    );
  }
}

export default App;

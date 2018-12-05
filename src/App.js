import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';

import Weather from './containers/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather forecast</h1>
          <Weather />
        </header>
      </div>
    );
  }
}

export default App;

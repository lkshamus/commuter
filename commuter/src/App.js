import React, { Component } from 'react';
import CurrentWeather from './containers/CurrentWeather/CurrentWeather'
import  SearchWeather  from './containers/SearchWeather/SearchWeather'
import CurrentDirections from './containers/CurrentDirections/CurrentDirections'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>commuter</h1>
        <SearchWeather />
        <CurrentWeather />
        <CurrentDirections />
      </div>
    );
  }
}

export default App;

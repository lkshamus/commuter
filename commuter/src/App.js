import React, { Component } from 'react';
import CurrentWeather from './containers/CurrentWeather'
import  SearchWeather  from './containers/SearchWeather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>commuter</h1>
        <SearchWeather />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;

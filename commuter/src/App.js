import React, { Component } from 'react';
import CurrentWeather from './containers/CurrentWeather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>commuter</h1>
        <CurrentWeather CurrentWeather={this.props.currentWeather} />
      </div>
    );
  }
}

export default App;

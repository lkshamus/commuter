import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import CurrentWeather from './containers/CurrentWeather/CurrentWeather'
import CurrentDirections from './containers/CurrentDirections/CurrentDirections'
import SearchDirections from './containers/SearchForDirections/SearchDirections'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

         <Route
          exact path='/'
          component={SearchDirections}
        />

          <Route
           exact path='/directions'
          component={CurrentDirections}
            />

      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import Header from './components/Header/Header'
import CurrentWeather from './containers/CurrentWeather/CurrentWeather'
import CurrentDirections from './containers/CurrentDirections/CurrentDirections'
import SearchDirections from './containers/SearchForDirections/SearchDirections'
import NotFound from './components/NotFound'

import './App.css';

class App extends Component {
 // componentDidMount() { 
 //     const script = document.createElement('script');
 //     script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
 //     document.body.appendChild(script);
 //     script.async = true;
 //     script.onload = function () {
 //       window.tomtom.L.map('map', {
 //         source: 'vector',
 //         key: 'akkWOQEtirRsxhvbusAnViGiGzN2NnjH',
 //         center: [37.769167, -122.478468],
 //         basePath: '/sdk',
 //         zoom: 15
 //       });
 //     }
 //   }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
         <Route
          exact path='/'
          component={SearchDirections}
        />
          <Route
           exact path='/directions'
          component={CurrentDirections}
            /> 
          <Route  exact path='*' component={NotFound} />
        </Switch>
        <div id='map'></div>
      </div>
    );
  }
}

export default App;
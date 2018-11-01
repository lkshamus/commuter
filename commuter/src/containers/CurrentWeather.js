import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentWeather} from '../actions/thunks/currentWeatherThunk'
import { setCurrentWeather } from '../actions'

export class CurrentWeather extends Component {

 async componentDidMount() {
    await this.props.displayWeather(this.props.currentWeather)
  }

  // weather = this.props.currentWeather

          // (k - 273.15) * 9 / 5 + 32

  render () {



    try{

       return (
      <div>
        <h1>weather in {this.props.currentWeather.name}</h1>
        <h1>weather in {Math.round((this.props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}°F</h1>
      </div>
    )

    } catch {

      return (
      <div>
        <h1>loading weather</h1>
      </div>
    )
    }
  }
}

export const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather
});

export const mapDispatchToProps = (dispatch) => ({
  displayWeather: (data) => dispatch(getCurrentWeather(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
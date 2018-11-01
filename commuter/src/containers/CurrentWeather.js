import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentWeather} from '../actions/thunks/currentWeatherThunk'
import { setCurrentWeather } from '../actions'
import Loading from '../components/Loading/index'
export class CurrentWeather extends Component {

 async componentDidMount() {
    await this.props.displayWeather(this.props.currentWeather)
  }

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
      <Loading />
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  displayWeather: (data) => dispatch(getCurrentWeather(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
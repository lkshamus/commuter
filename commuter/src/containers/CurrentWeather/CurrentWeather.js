import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { getDestinationWeather } from '../../actions/thunks/destinationWeatherThunk'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather, updateSearchWeather } from '../../actions'
import Loading from '../../components/Loading/index'
import './CurrentWeather.css'

export class CurrentWeather extends Component {

  render () {
    try{
       return (
        <div>
      <div className='start-weather'>
        <h3> <span className='text'> Origin Weather: </span>{this.props.currentWeather.name}</h3>
        <h3> <span className='text'> Weather in </span>{Math.round((this.props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}°F</h3>
        <h3> <span className='text'> Current Conditions: </span>{this.props.currentWeather.weather[0].description}</h3>
      </div>
      <div className='weather'>
        <h3> <span className='text'> Destination Weather:  </span> {this.props.destinationWeather.city.name}</h3>
        <h3> <span className='text'> Weather in </span>{Math.round((this.props.destinationWeather.list[0].main.temp - 273.15) * 9 / 5 + 32)}°F</h3>
        <h3> <span className='text'> Current Conditions:  </span>{this.props.destinationWeather.list[0].weather[0].description}</h3>
        <NavLink to='/'> <button className='redo'>New Search</button></NavLink>
      </div>
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
  destinationWeather: state.destinationWeather,
  isLoading: state.isLoading,
});

export const mapDispatchToProps = (dispatch) => ({
  displayWeather: (data) => dispatch(getCurrentWeather(data))

});

export default connect(mapStateToProps, null)(CurrentWeather);
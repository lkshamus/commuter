import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { getCurrentWeather} from '../../actions/thunks/currentWeatherThunk'
import { setCurrentWeather } from '../../actions'
import Loading from '../../components/Loading/index'
import './CurrentWeather.css'

export class CurrentWeather extends Component {

 async componentDidMount() {
    await this.props.displayWeather(this.props.currentWeather)
  }

  render () {
    try{
       return (
      <div className='weather'>
        <h3> <span className='text'> Weather in </span> {this.props.currentWeather.name}</h3>
        <h3> <span className='text'> Weather in </span>{Math.round((this.props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}°F</h3>
        <h3> <span className='text'> Current Conditions: </span> {this.props.currentWeather.weather[0].description}</h3>
        <NavLink to='/'> <button>Redo Search</button></NavLink>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import Loading from '../../components/Loading/index'
import './CurrentWeather.css'

export class CurrentWeather extends Component {

  render () {
    let weatherIconOrigin = this.props.currentWeather.weather[0].icon
    let weatherIconDestination = this.props.destinationWeather.list[0].weather[0].icon

    try{
      return (
        <div className='weather-box'>    
          <div className='weather-section'> 
            <h2 className ='weather-header'>Weather</h2>      
            <div className='start-weather'>
              <h3 className='directions-weather'> <span className='text'> Origin weather: </span><span className='result'>{Math.round((this.props.currentWeather.main.temp - 273.15) * 9 / 5 + 32)}°F</span></h3>
              <h3 className='directions-weather'> <span className='text'> Current Conditions: </span>
                <span className='result'>{this.props.currentWeather.weather[0].description}
                <img alt='weather-icon' className='icon' src={`http://openweathermap.org/img/w/${weatherIconOrigin}.png`}/>
                </span>
              </h3>
            </div>
            <div className='weather'>
              <h3 className='directions-weather'> <span className='text'> Destination weather: </span><span className='result'>{Math.round((this.props.destinationWeather.list[0].main.temp - 273.15) * 9 / 5 + 32)}°F</span></h3>
              <h3 className='directions-weather'> <span className='text'> Current Conditions:  </span>
                <span className='result'>{this.props.destinationWeather.list[0].weather[0].description}
                <img alt='weather-icon' className='icon' src={`http://openweathermap.org/img/w/${weatherIconDestination}.png`}/></span></h3>
            </div>
            <div className='new-search-btn'>  
              <NavLink to='/'> <button className='redo'>New Search</button></NavLink>
            </div>                
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

CurrentWeather.propTypes = {
  isLoading: PropTypes.bool,
  displayWeather: PropTypes.func,
};
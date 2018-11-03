import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchWeather } from '../../actions'
import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { setDirections, updateDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import Loading from '../../components/Loading/index'

export class SearchDirections extends Component {
  constructor() {
    super()
    this.state = {
      origin: '',
      departure: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmitSearch = async (e) => {
    e.preventDefault();
    console.log('event', e)
    this.props.getNewDirections(this.state.origin, this.state.departure)
    let startCoordinates = this.props.directions.routes[0].legs[0].start_location 
    let endCoordinates = this.props.directions.routes[0].legs[0].end_location
    await this.props.displayWeatherStart(startCoordinates)
    await this.props.displayWeatherEnd(endCoordinates)
    // await this.props.displaySearchedWeather(startCoordinates)
    // this.props.displayWeather(this.state.origin)
    // this.props.displaySearchedWeather(this.state.origin)
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmitSearch}>
        <input
        placeholder='enter origin' 
        className='origin'
        name='origin' 
        value={this.state.origin}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='enter departure' 
        className='departure'
        name='departure' 
        value={this.state.departure}
        onChange={(e) => this.handleChange(e)}       
        />
        <div>
          <button 
          name='bicycle' 
          value='bicycle'
          onClick={this.handleSubmitSearch}
          >
          Bicycle</button>
          <button 
          name='walking' 
          value='walking'
          onClick={this.handleSubmitSearch}
          >
          Walking</button>
          <button 
          name='transit' 
          value='transit'
          onClick={this.handleSubmitSearch}
          >
          Transit</button>
          <button 
          name='driving' 
          value='driving'
          onClick={this.handleSubmitSearch}
          >
          Driving</button>
        </div>
        <button>submit</button>
      </form>
    )
  }
}


export const mapStateToProps = (state) => ({
  directions: state.directions,
  startWeather: state.test,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  getNewDirections: (origin, departure) => dispatch(getCurrentDirections(origin, departure)),
  displayWeatherStart: (city) => dispatch(getCurrentWeather(city)),
  displayWeatherEnd: (city) => dispatch(getCurrentWeather(city)),
  // displaySearchedWeather: (city) => dispatch(updateSearchWeather(city))
  // displayNewDirections: (city) => dispatch(updateDirections(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDirections);

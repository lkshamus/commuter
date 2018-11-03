import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchWeather } from '../../actions'
import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
// import { getCurrentDrivingDirections } from '../../actions/thunks/originAndDepartureThunk'
import { setDirections, updateDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import Loading from '../../components/Loading/index'

export class SearchDirections extends Component {
  constructor() {
    super()
    this.state = {
      origin: '',
      departure: '',
      mode: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleRadioChange = (e) => {
  this.setState({
    mode: e.target.value
  });
}

  handleSubmitSearch = async (e) => {
    e.preventDefault();
    this.props.getNewDirections(this.state.origin, this.state.departure, this.state.mode)
    let startCoordinates = this.props.directions.routes[0].legs[0].start_location 
    let endCoordinates = this.props.directions.routes[0].legs[0].end_location
    await this.props.displayWeatherStart(startCoordinates)
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

          <label>
            <input 
            type='radio' 
            value='transit' 
            name='radio' 
            checked={this.state.mode === 'transit'}
            onChange={this.handleRadioChange}
            />
            Transit
          </label>

          <label>
            <input 
            type='radio' 
            value='walking' 
            name='radio'
            checked={this.state.mode === 'walking'}
            onChange={this.handleRadioChange}
            />
            Walking
          </label>
           <label>
            <input 
            type='radio' 
            value='bicycling' 
            name='radio'
            checked={this.state.mode === 'bicycling'}
            onChange={this.handleRadioChange}
            />
            bicycling
          </label>
          <label>
            <input 
            type='radio' 
            value='driving' 
            name='radio'
            checked={this.state.mode === 'driving'}
            onChange={this.handleRadioChange}
            />
            driving
          </label>
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
  getNewDirections: (origin, departure, mode) => dispatch(getCurrentDirections(origin, departure, mode)),
  displayWeatherStart: (city) => dispatch(getCurrentWeather(city)),
  // displayWeatherEnd: (city) => dispatch(getCurrentWeather(city)),
  // getDrivingDirections: (origin, departure) => dispatch(getCurrentDrivingDirections(origin, departure))
  // displaySearchedWeather: (city) => dispatch(updateSearchWeather(city))
  // displayNewDirections: (city) => dispatch(updateDirections(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDirections);

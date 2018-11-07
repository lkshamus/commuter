import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { setDirections, updateDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { getDestinationWeather } from '../../actions/thunks/destinationWeatherThunk'
import { setCurrentWeather } from '../../actions'
import CurrentDirections from '../CurrentDirections/CurrentDirections'
import Loading from '../../components/Loading/index'
import './SearchDirections.css'

export class SearchDirections extends Component {
  constructor() {
    super()
    this.state = {
      origin: '',
      destination: '',
      mode: '',
      userwarning: ''
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

  removeWarning = () => {
    this.setState({
      userwarning: '',
    })
  };

  userWarning = async () => {
    await this.setState({
      userwarning: 'Not-valid'
    })
    await setTimeout(this.removeWarning, 5000)
  };

  handleSubmitSearch = async (e) => {
    e.preventDefault();
    await this.props.getNewDirections(this.state.origin, this.state.destination, this.state.mode)
    if(this.props.directions.status !== 'NOT_FOUND' && this.state.origin !== '' && this.state.destination !== '') {
      let startCoordinates = this.props.directions.routes[0].legs[0].start_location 
      let endCoordinates = this.props.directions.routes[0].legs[0].end_location
      await this.props.displayWeatherStart(startCoordinates)
      await this.props.displayWeatherEnd(endCoordinates)
      this.props.history.push('/directions')
    } else {
      this.userWarning()
      console.log('oops')
    }

  };

  render() {
    return (
      <form
        className='search-form'
        onSubmit={this.handleSubmitSearch}>
        <input
        placeholder='enter origin' 
        className='origin'
        name='origin' 
        value={this.state.origin}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='enter destination' 
        className='destination'
        name='destination' 
        value={this.state.destination}
        onChange={(e) => this.handleChange(e)}       
        />
       <button disabled={!this.state.mode}className='submit-btn'>submit</button>
        <p className={`error ${this.state.userwarning}`}> no route found </p>
        <ul>
          <li>
            <label>
              <input 
              className='radio'
              type='checkbox' 
              value='transit' 
              name='radio' 
              checked={this.state.mode === 'transit'}
              onChange={this.handleRadioChange}
              />
              transit
           </label>
          </li>
          <li>
            <label>
              <input 
              className='radio'
              type='checkbox' 
              value='walking' 
              name='radio'
              checked={this.state.mode === 'walking'}
              onChange={this.handleRadioChange}
            />
              walking
            </label>
          </li>
          <li>  
            <label>
              <input 
              className='radio'
              type='checkbox' 
              value='bicycling' 
              name='radio'
              checked={this.state.mode === 'bicycling'}
              onChange={this.handleRadioChange}
              />
              bicycling
            </label>
          </li> 
          <li> 
            <label>
              <input 
              className='radio'
              type='checkbox'  
              value='driving' 
              name='radio'
              checked={this.state.mode === 'driving'}
              onChange={this.handleRadioChange}
              />
              driving
            </label>
          </li>
        </ul>
      </form>
    )
  }
}


export const mapStateToProps = (state) => ({
  directions: state.directions,
  currentWeather: state.currentWeather,
  updateSearchWeather: state.destinationWeather,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  getNewDirections: (origin, destination, mode) => dispatch(getCurrentDirections(origin, destination, mode)),
  displayWeatherStart: (city) => dispatch(getCurrentWeather(city)),
  displayWeatherEnd: (city) => dispatch(getDestinationWeather(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDirections);

SearchDirections.propTypes = {
  directions: PropTypes.object, 
  currentWeather: PropTypes.object,
  updateSearchWeather: PropTypes.object,
  isLoading: PropTypes.bool,
  getNewDirections: PropTypes.func,
  displayWeatherStart: PropTypes.func,
  displayWeatherEnd: PropTypes.func
};

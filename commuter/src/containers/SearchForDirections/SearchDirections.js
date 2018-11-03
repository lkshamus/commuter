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

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.props.getNewDirections(this.state.origin, this.state.departure)
    this.props.displayWeather(this.state.origin)
    this.props.displaySearchedWeather(this.state.origin)
    // this.props.displayNewDirections(this.state.origin + this.state.departure)
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
        <button>submit</button>
      </form>
    )
  }
}


export const mapStateToProps = (state) => ({
  directions: state.directions,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  getNewDirections: (origin, departure) => dispatch(getCurrentDirections(origin, departure)),
  displayWeather: (city) => dispatch(getCurrentWeather(city)),
  displaySearchedWeather: (city) => dispatch(updateSearchWeather(city))
  // displayNewDirections: (city) => dispatch(updateDirections(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDirections);

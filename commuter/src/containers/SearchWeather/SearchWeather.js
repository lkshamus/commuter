import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchWeather } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import Loading from '../../components/Loading/index'

export class SearchWeather extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.props.displayWeather(this.state.searchInput)
    this.props.displaySearchedWeather(this.state.searchInput)
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmitSearch}>
        <input 
        placeholder='search for weather' 
        className='weather-search'
        name='searchInput'
        value={this.state.searchInput}
        onChange={(e) => this.handleChange(e)}
        />
        <button>search</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather,
  searchedWeather: state.searchedWeather,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  displayWeather: (city) => dispatch(getCurrentWeather(city)),
  displaySearchedWeather: (city) => dispatch(updateSearchWeather(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);
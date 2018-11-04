import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { getCurrentDrivingDirections } from '../../actions/thunks/originAndDepartureThunk'
import { setDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import { updateSearchWeather } from '../../actions'
import Loading from '../../components/Loading/index'

export class CurrentDirections extends Component {

 async componentDidMount() {
    await this.props.displayDirections(this.props.directions)
    // await this.props.displayDrivingDirections(this.props.directions.routes)
  }

  render () {
    try{
        return (
          <div>
            <NavLink to='/'> <button>Redo Search</button></NavLink>
            <h1>Starting Address: {this.props.directions.routes[0].legs[0].start_address}</h1>
            <h1>Ending Address: {this.props.directions.routes[0].legs[0].end_address}</h1>
            <h1>Time until Destination: {this.props.directions.routes[0].legs[0].duration.text}</h1>
            <h1>Miles to Destination: {this.props.directions.routes[0].legs[0].distance.text}</h1>
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
  directions: state.directions,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  displayDirections: (origin, departure) => dispatch(getCurrentDirections(origin, departure)),
  // displayDrivingDirections: (origin, departure) => dispatch(getCurrentDrivingDirections(origin, departure)),
  getWeather: (coordinates) => dispatch(getCurrentWeather(coordinates)),
  getWeather: (coordinates) => dispatch(updateSearchWeather(coordinates))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDirections);
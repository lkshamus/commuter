import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { getCurrentDrivingDirections } from '../../actions/thunks/originAndDepartureThunk'
import { setDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import { updateSearchWeather } from '../../actions'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Loading from '../../components/Loading/index'
import './CurrentDirections.css'

export class CurrentDirections extends Component {

 async componentDidMount() {
    await this.props.displayDirections(this.props.directions)
    // await this.props.displayDrivingDirections(this.props.directions.routes)
  }

  render () {
    try{
        return (
          <div className='display-directions'>
            <div className='direction-text'>
              <h3> <span className='text'>Starting Address: </span> {this.props.directions.routes[0].legs[0].start_address}</h3>
              <h3> <span className='text'> Ending Address:</span> {this.props.directions.routes[0].legs[0].end_address}</h3>
              <h3> <span className='text'> Travel Time:</span> {this.props.directions.routes[0].legs[0].duration.text}</h3>
              <h3> <span className='text'> Distance in Miles:</span> {this.props.directions.routes[0].legs[0].distance.text}</h3>
            </div>  
            <CurrentWeather />
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
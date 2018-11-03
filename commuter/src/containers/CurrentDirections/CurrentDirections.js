import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { setDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import { updateSearchWeather } from '../../actions'
import Loading from '../../components/Loading/index'

export class CurrentDirections extends Component {

 async componentDidMount() {
    await this.props.displayDirections(this.props.directions.routes)

    }


// toStandardTime = (militaryTime) => {
//     militaryTime = militaryTime.split(':');
//     return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' : militaryTime.join(':') + ' A.M.'
// }

  render () {
    try{
      return (
        <div>
          <h1>Starting Address: {this.props.directions.routes[0].legs[0].start_address}</h1>
          <h1>Ending Address: {this.props.directions.routes[0].legs[0].end_address}</h1>
          <h1>Departure Time: {this.props.directions.routes[0].legs[0].departure_time.text}</h1>
          <h1>Arrival Time: {this.props.directions.routes[0].legs[0].arrival_time.text}</h1>
 
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
  getWeather: (coordinates) => dispatch(getCurrentWeather(coordinates)),
  getWeather: (coordinates) => dispatch(updateSearchWeather(coordinates))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDirections);
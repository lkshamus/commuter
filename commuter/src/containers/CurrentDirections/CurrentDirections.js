import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { setDirections } from '../../actions'
import { getCurrentWeather } from '../../actions/thunks/searchWeatherThunk'
import { setCurrentWeather } from '../../actions'
import { updateSearchWeather } from '../../actions'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Loading from '../../components/Loading/index'
import { gmapApi } from '../../utilities/APIkey'
import './CurrentDirections.css'

export class CurrentDirections extends Component {

 render () {
  const startLat = this.props.directions.routes[0].legs[0].start_location.lat
  const startLng = this.props.directions.routes[0].legs[0].start_location.lng
  const endLat = this.props.directions.routes[0].legs[0].end_location.lat
  const endLng = this.props.directions.routes[0].legs[0].end_location.lng
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
            <div>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\ &markers=size:mid%7Ccolor:red%7C${startLat}, ${startLng}%7C${endLat}, ${endLng}&key=${gmapApi}`}/>
            
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
  directions: state.directions,
  isLoading: state.isLoading
});

export default connect(mapStateToProps, null)(CurrentDirections);

CurrentDirections.propTypes = {
  directions: PropTypes.object, 
  isLoading: PropTypes.bool,
};
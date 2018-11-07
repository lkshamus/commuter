import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
          <div>
            <div className='display-directions'>
              <h2>Travel</h2>
              <div className='starting-address'>
                <h3 className='directions'> <span className='text'> Travel Time:</span> <span className='result'>{this.props.directions.routes[0].legs[0].duration.text}</span></h3>  
                <h3 className='directions'> <span className='text'>Starting Address: </span> <span className='result'>{this.props.directions.routes[0].legs[0].start_address}</span></h3>                      
              </div>
              <div className='ending-address'>
                <h3 className='directions'> <span className='text'> Distance in Miles:</span> <span className='result'>{this.props.directions.routes[0].legs[0].distance.text}</span></h3>            
                <h3 className='directions'> <span className='text'> Ending Address:</span><span className='result'> {this.props.directions.routes[0].legs[0].end_address}</span></h3>
                </div>
              <CurrentWeather />
            <div className='map'>
              <img alt='map' className ='mapping' src={`https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\ &markers=size:mid%7Ccolor:green%7C${startLat}, ${startLng}%7C&markers=size:mid%7Ccolor:red%7C${endLat}, ${endLng}&key=${gmapApi}`}/>
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
  directions: state.directions,
  isLoading: state.isLoading
});

export default connect(mapStateToProps, null)(CurrentDirections);

CurrentDirections.propTypes = {
  directions: PropTypes.object, 
  isLoading: PropTypes.bool,
};
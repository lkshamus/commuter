import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentDirections } from '../../actions/thunks/searchDirectionsThunk'
import { setDirections } from '../../actions'
import Loading from '../../components/Loading/index'

export class CurrentDirections extends Component {

 async componentDidMount() {
  console.log('this is props', this.props)
    await this.props.displayDirections(this.props.directions.route)
    }


toStandardTime = (militaryTime) => {
    militaryTime = militaryTime.split(':');
    return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' : militaryTime.join(':') + ' A.M.'
}

  render () {
    try{
      console.log(this.props.directions)
      return (
        <div>
          <h1>Starting location : {this.props.directions.route.locations[0].adminArea5}</h1>
          <h1>Starting location : {this.props.directions.route.locations[1].adminArea5}</h1>
          <h1>Travel Time : {
            (this.props.directions.route.formattedTime)}</h1>
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
  displayDirections: (origin, departure) => dispatch(getCurrentDirections(origin, departure))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentDirections);
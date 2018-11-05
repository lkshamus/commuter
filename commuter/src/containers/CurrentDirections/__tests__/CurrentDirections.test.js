/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { getCurrentDirections } from '../../../actions/thunks/searchDirectionsThunk'
import { CurrentDirections, mapDispatchToProps, mapStateToProps } from '../CurrentDirections';
import { setDirections } from '../../../actions'
import { setCurrentWeather } from '../../../actions'
import { updateSearchWeather } from '../../../actions'

describe('CurrentDirections', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CurrentDirections />)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should map the state to props', () => {

    const directions = {origin: 'Mountain View', destination: 'San Jose'}

    const expected = {directions}

    const mockState = {
      directions: directions
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect (mappedProps).toEqual(expected)

  })
})

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

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setDirections action when getCurrentDirections is called', () => {

    const directions =  {origin: 'Mountain View', destination: 'San Jose'}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = getCurrentDirections(directions)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.displayDirections(directions)
      
    expect(mockDispatch).toHaveBeenCalled
  })

  it('calls dispatch with a setCurrentWeather action when getCurrentDirections is called', () => {

    const weather =  {city: 'Mountain View', temp: 70}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = updateSearchWeather(weather)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.getWeather(weather)
      
    expect(mockDispatch).toHaveBeenCalled
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

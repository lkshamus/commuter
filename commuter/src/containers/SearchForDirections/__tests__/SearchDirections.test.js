/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { getCurrentDirections } from '../../../actions/thunks/searchDirectionsThunk'
import { SearchDirections, mapDispatchToProps, mapStateToProps } from '../SearchDirections';
import { setDirections } from '../../../actions'
import { setCurrentWeather } from '../../../actions'
import { updateSearchWeather } from '../../../actions'

describe('SearchDirections', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchDirections />)
    expect(wrapper).toMatchSnapshot();
  })
})

describe.skip('mapDispatchToProps', () => {
  it('calls dispatch with a setDirections action when getCurrentDirections is called', () => {

    const directions =  {origin: 'Mountain View', destination: 'San Jose'}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = getNewDirections(directions)
      
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
    const startWeather = {city: 'Mountain View', temp: 70}

    const expected = {directions, startWeather}

    const mockState = {
      directions: directions,
      startWeather: startWeather
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect (mappedProps).toEqual(expected)

  })
})

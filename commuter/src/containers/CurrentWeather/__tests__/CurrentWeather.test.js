/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { getCurrentWeather} from '../../../actions/thunks/currentWeatherThunk'
import { CurrentWeather, mapDispatchToProps, mapStateToProps } from '../CurrentWeather';
import { setCurrentWeather } from '../../../actions'
import { updateSearchWeather } from '../../../actions'

describe('CurrentWeather', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CurrentWeather />)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a updateSearchWeather action when getCurrentDirections is called', () => {

    const currentWeather =  {city: 'Mountain View', temp: 70}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = updateSearchWeather(currentWeather)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.displayWeather(currentWeather)
      
    expect(mockDispatch).toHaveBeenCalled
  })
})


describe('mapStateToProps', () => {
  it('should map the state to props', () => {

    const currentWeather =  {city: 'Mountain View', temp: 70}

    const expected = {currentWeather}

    const mockState = {
      currentWeather: currentWeather
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect (mappedProps).toEqual(expected)

  })
})
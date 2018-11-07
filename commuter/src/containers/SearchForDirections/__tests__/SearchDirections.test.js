/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { getCurrentDirections } from '../../../actions/thunks/searchDirectionsThunk'
import { getCurrentWeather } from '../../../actions/thunks/searchWeatherThunk'
import { getDestinationWeather } from '../../../actions/thunks/destinationWeatherThunk'
import { SearchDirections, mapDispatchToProps, mapStateToProps } from '../SearchDirections';
import { setDirections } from '../../../actions'
import { setCurrentWeather } from '../../../actions'
import { updateSearchWeather } from '../../../actions'

describe('SearchDirections', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchDirections />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {

    const wrapper = shallow(<SearchDirections />)
    const defaultState = {
      origin: '',
      destination: '',
      mode: '',
      userwarning: ''
    }
    expect(wrapper.state()).toEqual(defaultState)
  });
})

describe('handleChange', () => {
  it('should call set state', async () => {

    const mockPreventDefault = jest.fn();

    const mockEvent = {
      target: {
        name: 'origin',
        value: 'Mountain View'
      },
      preventDefault: mockPreventDefault
    }
    const wrapper = shallow(<SearchDirections />)
    const expected = 'Mountain View'
    await wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().origin).toEqual(expected);
  });

  it('should call handleChange on origin input', () => {
    const mockPreventDefault = jest.fn();

    const mockEvent = {
      target: {
        name: 'origin',
        value: 'Mountain View'
      },
      preventDefault: mockPreventDefault
    }

    const wrapper = shallow(<SearchDirections />)
    const spy = spyOn(wrapper.instance(), 'handleChange')
    wrapper.instance().forceUpdate();

    wrapper.find('.origin').simulate('change', mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
    });

  it('should call handleChange on destination input', () => {
    const mockPreventDefault = jest.fn();
    
    const mockEvent = {
      target: {
        name: 'origin',
        value: 'Mountain View'
      },
      preventDefault: mockPreventDefault
    }

    const wrapper = shallow(<SearchDirections />)
    const spy = spyOn(wrapper.instance(), 'handleChange')
    wrapper.instance().forceUpdate();

    wrapper.find('.destination').simulate('change', mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
    });  
})
  
describe('mapDispatchToProps', () => {
  it('calls dispatch with a setDirections action when getCurrentDirections is called', () => {
    // const directions =  {origin: 'Mountain View', destination: 'San Jose'}
    const origin = 'Mountain View'
    const destination = 'San Jose'
    const mode = 'driving'
    const currentWeather = {location: 'denver', temp: 30}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = getCurrentDirections(origin, destination, mode)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.getNewDirections(origin, destination, mode)
      
    expect(mockDispatch).toHaveBeenCalled
  })

  it('calls dispatch with a setCurrentWeather action when getCurrentWeather is called', () => {

    const weather =  {city: 'Mountain View', temp: 70}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = getCurrentWeather(weather)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.displayWeatherStart(weather)
      
    expect(mockDispatch).toHaveBeenCalled
  })

  it('calls dispatch with a updateSearchWeather action when getDestinationWeather is called', () => {

    const weather =  {city: 'Mountain View', temp: 70}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = getDestinationWeather(weather)
      
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.displayWeatherEnd(weather)
      
    expect(mockDispatch).toHaveBeenCalled
  })
})

describe('mapStateToProps', () => {
  it('should map the state to props', () => {

    const directions = {origin: 'Mountain View', destination: 'San Jose'}
    const currentWeather = {location: 'Mountain View', temp: 70}
    const isLoading = true

    const expected = {directions, currentWeather, isLoading}

    const mockState = {
      directions: directions,
      currentWeather: currentWeather,
      isLoading: isLoading
    }
    
    const mappedProps = mapStateToProps(mockState)
    expect (mappedProps).toEqual(expected)
  })
})

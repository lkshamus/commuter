/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { getDestinationWeather } from '../../../actions/thunks/destinationWeatherThunk'
import { getCurrentWeather } from '../../../actions/thunks/searchWeatherThunk'
import { CurrentWeather, mapDispatchToProps, mapStateToProps } from '../CurrentWeather';
import { setCurrentWeather } from '../../../actions'
import { updateSearchWeather } from '../../../actions'

describe('CurrentWeather', () => {
  it('should match snapshot', () => {
    const currentWeather = 
    {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
        weather: 
        [{
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }],
          base: "stations",
          main: {
          temp: 300.15,
          pressure: 1007,
          humidity: 74,
          temp_min: 300.15,
          temp_max: 300.15
      },
    }

    const destinationWeather = 
    {
      cod: "200",
      message: 0.0036,
      cnt: 40,
      list: 
      [{
        dt: 1485799200,
        main: {
        temp: 261.45,
        temp_min: 259.086,
        temp_max: 261.45,
      },
        weather: 
        [{
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "02n"
        }],
          clouds: {
          all: 8
        },
          wind: {
          speed: 4.77,
          deg: 232.505
        },
          snow: { },
          sys: {
          pod: "n"
        },
          dt_txt: "2017-01-30 18:00:00"
        },
      ]}
      
    const wrapper = shallow(<CurrentWeather destinationWeather={destinationWeather} currentWeather={currentWeather}/>)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setCurrentWeather action when displayWeather is called', () => {

    const currentWeather =  {city: 'Mountain View', temp: 70}
      
    const mockDispatch = jest.fn()
    const actionToDispatch = setCurrentWeather(currentWeather)
      
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
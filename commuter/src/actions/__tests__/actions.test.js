/* eslint-disable */
import * as Actions from '../index';

describe('actions', () => {
  it('should have a type of SET_CURRENT_WEATHER', () => {
    
    const currentWeather = {
      location: 'Denver', 
      temp: 35
    }
    const expected = {
      type: 'SET_CURRENT_WEATHER',
      weather: currentWeather
    }

    const result = Actions.setCurrentWeather(currentWeather);

    expect(result).toEqual(expected);
  })

  it('should have a type of IS_LOADING', () => {
    
    const bool = true

    const expected = {"isLoading": true, "type": "IS_LOADING"}

    const result = Actions.isLoading(bool)
    
    expect(result).toEqual(expected)
  })

  it('should have a type of UPDATE_WEATHER_SEARCH', () => {

    const destinationWeather = {
      location: 'Boulder',
      temp: 80
    }

    const expected = {
      type: 'UPDATE_WEATHER_SEARCH',
      destinationWeather: destinationWeather
    }

    const result = Actions.updateSearchWeather(destinationWeather)

    expect(result).toEqual(expected)
  })

  it('should have a type of SET_DIRECTION', () => {
    
    const currentDirections = {
      start: 'Denver', 
      end: 'Boulder'
    }
    const expected = {
      type: 'SET_DIRECTION',
      directions: currentDirections
    }

    const result = Actions.setDirections(currentDirections);

    expect(result).toEqual(expected);
  })

  it('should have a type of SET_HAS_FAILED', () => {
    
    const bool = true

    const expected = {"setFailed": true, "type": "SET_HAS_FAILED"}

    const result = Actions.setHasFailed(bool)
    
    expect(result).toEqual(expected)
  })
  it('should have a type of SET_HAS_ERRORED', () => {
    
    const bool = true

    const expected = {"setErrored": true, "type": "SET_HAS_ERRORED"}

    const result = Actions.setHasErrored(bool)
    
    expect(result).toEqual(expected)
  })

})
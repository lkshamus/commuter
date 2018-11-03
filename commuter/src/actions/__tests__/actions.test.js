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

  it.skip('should have a type of UPDATE_SEARCH_WEATHER', () => {

    const searchWeather = {
      location: 'Boulder',
      temp: 80
    }

    const expected = {
      type: 'UPDATE_SEARCH_WEATHER',
      searchWeather: searchWeather
    }

    const result = Actions.updateSearchWeather(searchWeather)

    expect(result).toEqual(expected)
  })

  it.skip('should have a type of SET_DIRECTIONS', () => {
    
    const currentDirections = {
      start: 'Denver', 
      end: 'Boulder'
    }
    const expected = {
      type: 'SET_DIRECTIONS',
      directions: currentDirections
    }

    const result = Actions.setDirections(currentDirections);

    expect(result).toEqual(expected);
  })
})
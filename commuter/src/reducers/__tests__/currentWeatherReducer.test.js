/* eslint-disable */
import currentWeatherReducer from '../currentWeatherReducer';

describe('currentWeatherReducer', () => {
  it('should return the default state', () => {
    const expected = {}

    const result = currentWeatherReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the current weather', () => {
    const expected = {
        location: 'Denver',
        temp: '34'
      }

    const mockAction = {
      type: 'SET_CURRENT_WEATHER',
      weather: expected
    }

    const result = currentWeatherReducer(null, mockAction)

    expect(result).toEqual(expected)
  })
})
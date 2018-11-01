/* eslint-disable */
import searchWeatherReducer from '../updateSearchWeatherReducer';

describe('searchWeatherReducer', () => {
  it('should return the default state', () => {
    const expected = ''

    const result = searchWeatherReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state when a search is inputed', () => {
    
    const expected = 'Westminster'

    const mockAction = {
      type: 'UPDATE_WEATHER_SEARCH',
      searchWeather: expected
    }

    const result = searchWeatherReducer(null, mockAction)

    expect(result).toEqual(expected)
  })

})
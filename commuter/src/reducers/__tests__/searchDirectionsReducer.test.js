/* eslint-disable */
import searchDirectionsReducer from '../searchDirectionsReducer';

describe('searchDirectionsReducer', () => {
  it('should return the default state', () => {
    const expected = {}

    const result = searchDirectionsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state when a search is inputed', () => {
    
    const expected = {origin: 'Mountain View', destination: 'San Jose'}

    const mockAction = {
      type: 'SET_DIRECTIONS',
      directions: expected
    }

    const result = searchDirectionsReducer(expected, mockAction)

    expect(result).toEqual(expected)
  })

})
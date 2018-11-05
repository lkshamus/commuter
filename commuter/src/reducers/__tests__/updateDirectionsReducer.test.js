/* eslint-disable */
import updateDirectionsReducer from '../updateDirectionsReducer';

describe('updateDirectionsReducer', () => {
  it('should return the default state', () => {
    const expected = {}

    const result = updateDirectionsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state when a search is inputed', () => {
    
    const expected = {origin: 'Mountain View', destination: 'San Jose'}

    const mockAction = {
      type: 'UPDATE_DIRECTIONS',
      directions: {origin: 'Mountain View', destination: 'San Jose'}
    }

    const result = updateDirectionsReducer(expected, mockAction)

    expect(result).toEqual(expected)
  })

})
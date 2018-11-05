/* eslint-disable */
import { getCurrentDirections } from '../searchDirectionsThunk'
import { isLoading, setHasErrored } from '../../index'

describe('searchDirectionsThunk', () => {
  let mockDirections
  let mockDispatch

  beforeEach(() => {
    mockDirections = jest.fn()
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getCurrentDirections(mockDirections)
    
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })


it.skip('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve('failed'))

    mockDispatch = jest.fn().mockImplementation(() => {
      return 'failed'
    })

    const thunk = getCurrentWeather(mockWeather)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setIsOk(true))
  })

it.skip('should dispatch Error(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    mockDispatch = jest.fn().mockImplementation(() => {
      return {"movies": {title: 'Mean Girls'}, "type": "SET_MOVIE_LIST"}
    })

    const thunk = getMovieList(mockFilter)

     await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setHasErrored(true))
  })
})
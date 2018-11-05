/* eslint-disable */
import { getCurrentWeather } from '../CurrentWeatherThunk'
import { isLoading, setHasErrored} from '../../index'

describe('currentWeatherThunk', () => {
  let mockWeather
  let mockDispatch

  beforeEach(() => {
    mockWeather = jest.fn()
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getCurrentWeather(mockWeather)
    
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
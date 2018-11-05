/* eslint-disable */
import { getDestinationWeather } from '../destinationWeatherThunk'
import { isLoading, setHasErrored, setHasFailed } from '../../index'

describe('currentWeatherThunk', () => {
  let mockWeather
  let mockDispatch

  beforeEach(() => {
    mockWeather = jest.fn()
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getDestinationWeather(mockWeather)
    
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })


it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve('failed'))

    mockDispatch = jest.fn().mockImplementation(() => {
      return 'failed'
    })

    const thunk = getDestinationWeather(mockWeather)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith({"destinationWeather": "failed", "type": "UPDATE_WEATHER_SEARCH"})
  })

it('should dispatch Error(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    mockDispatch = jest.fn()

    const thunk = getDestinationWeather(mockWeather)

     await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setHasErrored(true))
  })
})
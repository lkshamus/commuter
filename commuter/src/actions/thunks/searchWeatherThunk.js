import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, setCurrentWeather, setHasFailed, setHasErrored } from '../index'

export const getCurrentWeather = (city) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const weather = await fetchCall(cleaner.searchWeatherByCity(city));
      if (weather === 'failed') {
        dispatch(setHasFailed(true));
      }
      dispatch(isLoading(false));
      return dispatch(setCurrentWeather(weather));
    } catch(error) {
      console.log(error.message)
      dispatch(setHasErrored(true));
    }
  }
}

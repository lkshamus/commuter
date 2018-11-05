import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, updateSearchWeather, setHasErrored, setHasFailed } from '../index'

export const getDestinationWeather = (city) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const weather = await fetchCall(cleaner.hourlyWeatherByCity(city));
      if (weather === 'failed') {
        dispatch(setHasFailed(true));
      }
      dispatch(isLoading(false));
      return dispatch(updateSearchWeather(weather));
    } catch(error) {
      console.log(error.message)
      dispatch(setHasErrored(true));
    }
  }
}

import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, updateSearchWeather } from '../index'

export const getDestinationWeather = (city) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const weather = await fetchCall(cleaner.searchWeatherByCity(city));
      // if (weather === 'failed') {
      //   dispatch(setIsOk(true));
      // }
      dispatch(isLoading(false));
      return dispatch(updateSearchWeather(weather));
    } catch(error) {
      console.log(error.message)
      // dispatch(setHasErrored(true));
    }
  }
}
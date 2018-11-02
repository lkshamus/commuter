import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, setCurrentWeather } from '../index'

export const getCurrentWeather = (city) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const weather = await fetchCall(cleaner.defaultWeatherByCity);
      // if (weather === 'failed') {
      //   dispatch(setIsOk(true));
      // }
      dispatch(isLoading(false));
      return dispatch(setCurrentWeather(weather));
    } catch(error) {
      console.log(error.message)
      // dispatch(setHasErrored(true));
    }
  }
}
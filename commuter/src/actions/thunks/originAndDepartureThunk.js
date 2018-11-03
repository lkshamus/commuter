import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, setDirections } from '../index'

export const getCurrentDirections = (origin, departure) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const directions = await fetchCall(cleaner.orignAndDeparture('Denver', 'Boulder'));
      // if (weather === 'failed') {
      //   dispatch(setIsOk(true));
      // }
      dispatch(isLoading(false));
      return dispatch(setDirections(directions));
    } catch(error) {
      console.log('this is the error block')
      console.log(error.message)
      // dispatch(setHasErrored(true));
    }
  }
}

import fetchCall from '../../utilities/fetchCall';
import * as cleaner from '../../utilities/cleaner';
import { isLoading, setDirections, setHasFailed, setHasErrored } from '../index'

export const getCurrentDirections = (origin, destination, mode) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
   try {
      const directions = await fetchCall(cleaner.orignAndDeparture(origin, destination, mode));
      if (directions === 'failed') {
        dispatch(setHasFailed(true));
      }
      dispatch(isLoading(false));
      return dispatch(setDirections(directions));
   } catch(error) {
      console.log('this is the error block')
      console.log(error.message)
     dispatch(setHasErrored(true));
   }
  }
}
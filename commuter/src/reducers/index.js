import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';

import currentWeatherReducer from './currentWeatherReducer'

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  isLoading: isLoadingReducer
})
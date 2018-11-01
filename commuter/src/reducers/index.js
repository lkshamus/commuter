import { combineReducers } from 'redux';

import currentWeatherReducer from './currentWeatherReducer'

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer
})
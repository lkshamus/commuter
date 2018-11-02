import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import searchWeatherReducer from './updateSearchWeatherReducer'
import currentWeatherReducer from './currentWeatherReducer'
import searchDirectionsReducer from './searchDirectionsReducer'

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  searchedWeather: searchWeatherReducer,
  directions: searchDirectionsReducer,
  isLoading: isLoadingReducer,
})
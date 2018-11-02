import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import searchWeatherReducer from './updateSearchWeatherReducer'
import currentWeatherReducer from './currentWeatherReducer'

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  searchedWeather: searchWeatherReducer,
  isLoading: isLoadingReducer
})
import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import searchWeatherReducer from './updateSearchWeatherReducer'
import currentWeatherReducer from './currentWeatherReducer'
import searchDirectionsReducer from './searchDirectionsReducer'
import updateDirectionsReducer from './updateDirectionsReducer'
// import walkingDirectionsReducer from './walkingDirectionsReducer'
// import bikeDirectionsReducer from './bikeDirectionsReducer'
import transitDirectionsReducer from './transitDirectionsReducer'

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  searchedWeather: searchWeatherReducer,
  directions: searchDirectionsReducer,
  isLoading: isLoadingReducer,
  searchedDirections: updateDirectionsReducer,
//   walkingDirections: walkingDirectionsReducer,
//   bikeDirections: bikeDirectionsReducer,
  // directions: transitDirectionsReducer
})
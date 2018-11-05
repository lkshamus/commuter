const searchWeatherReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_WEATHER_SEARCH' :
      return action.destinationWeather;
    default:
      return state;
  }
}

export default searchWeatherReducer;
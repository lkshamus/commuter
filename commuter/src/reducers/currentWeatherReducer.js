const currentWeatherReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_WEATHER' :
      return action.weather;
    default:
      return state;
  }
}

export default currentWeatherReducer;
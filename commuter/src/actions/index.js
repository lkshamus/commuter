
export const setCurrentWeather = (weather) => {
  return {
    type: 'SET_CURRENT_WEATHER',
    weather
  }
}

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const updateSearchWeather = (searchWeather) => {
  return {
    type: 'UPDATE_WEATHER_SEARCH',
    searchWeather
  }
}

export const setDirections = (directions) => {
  return {
    type: 'SET_DIRECTION',
    directions
  }
}

// export const updateDirections = (searchedDirections) => {
//   return {
//     type: 'UPDATE_DIRECTIONS',
//   searchedDirections
//   }
// }

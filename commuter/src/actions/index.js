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

export const updateDirections = (searchedDirections) => {
  return {
    type: 'UPDATE_DIRECTIONS',
  searchedDirections
  }
}

export const setTransitDirections = (transitDirections) => {
  return {
    type: 'SET_TRANSIT_DIRECTIONS', 
    transitDirections
  }
}

export const setBikeDirections = (bikeDirections) => {
  return {
    type: 'SET_BIKE_DIRECTIONS',
    bikeDirections
  }
}

export const setWalkingDirections = (walkingDirections) => {
  return {
    type: 'SET_WALKING_DIRECTIONS', 
    walkingDirections
  }
}
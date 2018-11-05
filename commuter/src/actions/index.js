
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

export const updateSearchWeather = (destinationWeather) => {
  return {
    type: 'UPDATE_WEATHER_SEARCH',
    destinationWeather
  }
}

export const setDirections = (directions) => {
  return {
    type: 'SET_DIRECTION',
    directions
  }
}

export const updateDirections = (directions) => {
  return {
    type: 'UPDATE_DIRECTIONS',
    directions
  }
}

export const setHasFailed = (bool) => {
  return {
    type: 'SET_HAS_FAILED',
    setFailed: bool
  }
}

export const setHasErrored = (bool) => {
  return {
    type: 'SET_HAS_ERRORED',
    setErrored: bool
  }
}
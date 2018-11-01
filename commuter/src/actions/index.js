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
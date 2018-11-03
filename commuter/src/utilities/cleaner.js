import {apiKeyWeather, apiKeyMap} from './APIkey.js';

export const defaultWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=denver,US&appid=${apiKeyWeather}`

export const searchWeatherByCity = (city) => {
 const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${apiKeyWeather}`
 return url
}

export const searchDirections = (origin, departure) => `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${departure}&mode=transit&key=${apiKeyMap}`


export const searchedDirections = `http://www.mapquestapi.com/directions/v2/route?key=${apiKeyMap}&from=Denver&to=Boulder`

export const orignAndDeparture = (origin, departure) => {
  const url = `http://www.mapquestapi.com/directions/v2/route?key=${apiKeyMap}&from=${origin}&to=${departure}`
  return url
} 
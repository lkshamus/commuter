import {apiKeyWeather, apiKeyMap, gmapApi} from './APIkey.js';

export const defaultWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=denver,US&appid=${apiKeyWeather}`

export const searchWeatherByCity = (coordinates) => {
  console.log("Weather coordinates input", coordinates)
 const url = `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${apiKeyWeather}`
 return url
}


export const orignAndDeparture = (origin, destination) => {
  const proxy_url = 'https://cors-anywhere.herokuapp.com/';
  let target_url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=transit&key=`;
  const url = `${proxy_url}${target_url}${gmapApi}`
  return url
} 
import {apiKeyWeather} from './APIkey.js';

export const defaultWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=denver,US&appid=${apiKeyWeather}`

export const searchWeatherByCity = (city) => {
 const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${apiKeyWeather}`
 return url
}
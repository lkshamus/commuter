import {apiKeyWeather} from './APIKeys.js';

export const searchWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=denver,US&appid=${apiKeyWeather}`

// export const searchWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${apiConfig.apiKeyMap}`

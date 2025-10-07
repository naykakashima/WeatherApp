import dotenv from 'dotenv'

dotenv.config()

const API_KEY = process.env.WEATHER_API_KEY
const BASE_URL = 'http://api.weatherapi.com/v1'

export const getWeatherByCity = async (city) => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
    if (response.status === 401) {
        throw new Error('Invalid API key')
    }
    return response.json()
}
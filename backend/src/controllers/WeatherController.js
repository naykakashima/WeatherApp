import { getWeatherByCity } from "../api/WeatherApi.js";

export async function fetchWeatherByCity(req, res) {
    const city = req.body.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }
    try {
        const weatherData = await getWeatherByCity(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
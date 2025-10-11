import React from 'react'
import Navbar from '../components/Navbar'
import WeatherCard from '../components/WeatherCard'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import axios from 'axios'
import toast from 'react-hot-toast'
import useWeatherStore from '../data/useWeatherStore.js'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [city, setCity] = React.useState('')
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
    const setWeather = useWeatherStore(state => state.setWeather)
    let navigate = useNavigate();

    const onGetWeather = () => {
        if (!city)
            toast.error('Please enter a city name');
        else
          fetchWeather(city);
    };

    const fetchWeather = async (cityName) => {
        try {
            const response = await axios.get(`${backendUrl}/api/weatherByCity`, {
                params: { city: cityName }
            });
            console.log('Weather data:', response.data);
            setWeather(response.data);
            navigate('/WeatherPage');
        } catch (error) {
            toast.error('Failed to fetch weather data. Please check the city name and try again.');
            console.error('Error fetching weather data:', error);
        }
    };


  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-bold text-white mb-12 drop-shadow-lg"
        >
          Welcome to the Weather App
        </motion.h1>
        <WeatherCard city={city} setCity={setCity} onGetWeather={onGetWeather}/>
      </div>
    </div>
  )
}

export default HomePage
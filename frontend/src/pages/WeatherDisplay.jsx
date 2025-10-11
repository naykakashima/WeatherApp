import React from 'react'
import useWeatherStore from '../data/useWeatherStore.js'
import Navbar from '../components/Navbar.jsx'

const WeatherDisplay = () => {
  const weather = useWeatherStore(state => state.weather);
  console.log('Weather in WeatherDisplay:', weather);

  if (!weather) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white">
          <p className="text-2xl font-medium animate-pulse">Loading weather data...</p>
        </div>
      </>
    );
  }

  const { location, current } = weather;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
          <h1 className="text-4xl font-bold mb-2">{location.name}, {location.region}</h1>
          <p className="text-lg mb-4 opacity-80">{location.country}</p>

          <div className="flex flex-col items-center">
            <img
              src={`https:${current.condition.icon}`}
              alt={current.condition.text}
              className="w-20 h-20 mb-4"
            />
            <p className="text-6xl font-extrabold">{current.temp_c}°C</p>
            <p className="text-xl mb-6">{current.condition.text}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            <p><span className="font-semibold">Feels like:</span> {current.feelslike_c}°C</p>
            <p><span className="font-semibold">Humidity:</span> {current.humidity}%</p>
            <p><span className="font-semibold">Wind:</span> {current.wind_kph} kph</p>
            <p><span className="font-semibold">UV Index:</span> {current.uv}</p>
          </div>

          <p className="text-sm mt-6 opacity-70">
            Last updated: {current.last_updated}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;

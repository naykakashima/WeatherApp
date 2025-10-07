import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WeatherDisplay from './pages/WeatherDisplay'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WeatherPage" element={<WeatherDisplay />} />
      </Routes>
    </div>
  )
}

export default App
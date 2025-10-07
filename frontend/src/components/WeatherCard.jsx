// WeatherCard.jsx
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const WeatherCard = ({ city, setCity, onGetWeather }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="card w-96 bg-base-100 shadow-2xl"
    >
      <div className="card-body">
        <motion.h2 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="card-title text-2xl mb-4"
        >
          Search Weather
        </motion.h2>
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="form-control"
        >
          <label className="label">
            <span className="label-text">Enter city name</span>
          </label>
          <input 
            type="text" 
            placeholder="e.g., London, New York..." 
            className="input input-bordered w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="card-actions justify-end mt-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-full"
            onClick= {onGetWeather}
          >
            Get Weather
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WeatherCard
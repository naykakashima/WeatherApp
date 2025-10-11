// src/data/useWeatherStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWeatherStore = create(
  persist(
    (set) => ({
      weather: null,
      setWeather: (data) => set({ weather: data }),
    }),
    {
      name: 'weather-storage', // key for localStorage
      getStorage: () => sessionStorage, // optional (default)
    }
  )
)

export default useWeatherStore

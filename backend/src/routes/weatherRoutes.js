import express from "express"
import { fetchWeatherByCity } from "../controllers/WeatherController.js"

const router = express.Router()

//GET WEATHER BASED ON CITY
router.get("/weatherByCity", fetchWeatherByCity)
    
//just a test route
router.get("/", (_, res) => {
    res.send("API is running...")
})

export default router


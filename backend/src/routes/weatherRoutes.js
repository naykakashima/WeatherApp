import express from "express"
import { fetchWeatherByCity } from "../controllers/WeatherController.js"
import { verifyToken } from "../middleware/authMiddleware.js"

const router = express.Router()

//GET WEATHER BASED ON CITY
router.get("/weatherByCity", verifyToken, fetchWeatherByCity)
    
//just a test route
router.get("/", (_, res) => {
    res.send("API is running...")
})

export default router


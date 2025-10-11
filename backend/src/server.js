import express from 'express'
import dotenv from 'dotenv'
import weatherRoutes from './routes/weatherRoutes.js'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', weatherRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
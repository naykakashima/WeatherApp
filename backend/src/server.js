import express from 'express'
import dotenv from 'dotenv'
import weatherRoutes from './routes/weatherRoutes.js'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api', weatherRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
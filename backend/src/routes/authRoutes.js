import express from 'express'
import dotenv from 'dotenv'
import { login, register, logout } from '../controllers/authController.js'

dotenv.config()

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

export default router
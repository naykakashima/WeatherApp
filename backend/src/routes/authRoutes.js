import express from 'express'
import dotenv from 'dotenv'
import { login, register, logout, checkSession } from '../controllers/authController.js'
import { verifyToken } from "../middleware/verifyJwt.js";

dotenv.config()

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/checkSession' , verifyToken, checkSession)

export default router
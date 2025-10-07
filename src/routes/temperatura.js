import express from 'express'
import ControllerTemperatura from '../controllers/temperatura.js'

// Rotas do express


const router = express.Router()

// PRIMEIRO PARAMETRO É O ENDPOINT
router.post('/celFah', ControllerTemperatura.ConvertCelToFah)

export default router
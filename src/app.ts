import express from 'express'
export const app = express()
import { router } from './routes'
import morgan from 'morgan'

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(router)

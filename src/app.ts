import express from 'express'
import morgan from 'morgan'
import { categoriesRoutes } from './routes/categories.routes'
export const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/categories', categoriesRoutes)

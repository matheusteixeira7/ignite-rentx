import express from 'express'
export const app = express()
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import morgan from 'morgan'
import { router } from './routes'

// Middlewares
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(morgan('dev'))
app.use(router)

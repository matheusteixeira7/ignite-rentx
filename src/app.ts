import express from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specifications.routes'
export const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationsRoutes)

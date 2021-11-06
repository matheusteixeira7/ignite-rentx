import { Router } from 'express'
const router = Router()

import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'

// Routes
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)

export { router } // export routes

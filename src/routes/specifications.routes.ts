import Router from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications'

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  return listSpecificationsController.handle(req, res)
})

export { specificationsRoutes }

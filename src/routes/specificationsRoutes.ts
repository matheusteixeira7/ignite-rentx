import Router from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/service/CreateSpecificationService'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

export { specificationsRoutes }

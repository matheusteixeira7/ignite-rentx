import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRepository = new CategoriesRepository()

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})

export { categoriesRoutes } // Export the router

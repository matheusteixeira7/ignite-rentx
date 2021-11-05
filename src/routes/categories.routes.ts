import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { Router } from 'express'
import { CreateCategoryService } from '../modules/cars/service/CreateCategoryService'
import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})

export { categoriesRoutes } // Export the router

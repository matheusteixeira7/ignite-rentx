import Router from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/service/CreateSpecificationService'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { specificationName, description } = req.body

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  )

  createSpecificationService.execute({ specificationName, description })

  return res.status(201).send()
})

specificationsRoutes.get('/', (req, res) => {
  const all = specificationsRepository.list()

  return res.json(all)
})

export { specificationsRoutes }

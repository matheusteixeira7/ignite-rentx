import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

const specificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
)
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
)

export { createSpecificationController }

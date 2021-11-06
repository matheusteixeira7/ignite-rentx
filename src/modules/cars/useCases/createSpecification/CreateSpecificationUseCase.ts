import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

interface IRequest {
  specificationName: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ specificationName, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(specificationName)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${specificationName} already exists`)
    }

    this.specificationsRepository.create({ specificationName, description })
  }
}

export { CreateSpecificationUseCase }

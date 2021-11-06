import { Specification } from '../model/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ specificationName, description }: ICreateSpecificationDTO) {
    const specification = new Specification()

    Object.assign(specification, {
      specificationName,
      description,
      createdAt: new Date(),
    })

    this.specifications.push(specification)
  }

  list(): Specification[] {
    return this.specifications
  }

  findByName(specificationName: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.specificationName === specificationName
    )

    return specification
  }
}

export { SpecificationsRepository }

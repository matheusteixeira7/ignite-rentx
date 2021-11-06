import { Specification } from '../model/Specification'

interface ICreateSpecificationDTO {
  specificationName: string
  description: string
}

interface ISpecificationsRepository {
  findByName(specificationName: string): Specification
  list(): Specification[]
  create({ specificationName, description }: ICreateSpecificationDTO): void
}

export { ICreateSpecificationDTO, ISpecificationsRepository }

import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor (private categoriesRepository: CategoriesRepository) {
    console.log('matheus')
  }

  execute ({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}

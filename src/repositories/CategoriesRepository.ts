import { Category } from '../model/Category'

interface ICreateCategoryDTO {
  name: string
  description: string
}

export class CategoriesRepository {
  private categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ name, description }: ICreateCategoryDTO) {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
    })

    this.categories.push(category)
  }
}

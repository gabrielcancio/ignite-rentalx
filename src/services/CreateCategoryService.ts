import CategoriesRepository from "../repositories/CategoriesRepository";

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  private verifyCategoryAlreadyExists(name: string) {
    const categoryAlredayExists = this.categoriesRepository.findByName(name);

    if (categoryAlredayExists) {
      throw new Error("Category Already Exists!!");
    }
  }

  execute({ name, description }: IRequestDTO): void {
    this.verifyCategoryAlreadyExists(name);

    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;

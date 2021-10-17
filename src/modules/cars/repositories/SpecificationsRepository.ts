import { Specification } from "../models/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification []

  constructor () {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification()

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specifications)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specifications) => specifications.name === name
    )

    return specification
  }
}

export { SpecificationRepository }
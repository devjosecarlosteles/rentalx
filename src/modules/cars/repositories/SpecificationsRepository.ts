import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void {
    throw new Error("Method not implemented.");
  }

}
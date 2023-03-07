import { ICreatePurchaseDTO } from "../../dtos/ICreatePurchaseDTO";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

export class CreatePurchaseUseCase {
  constructor(private purchasesRepository: IPurchasesRepository) {}

  async execute({
    approved,
    clientId,
    total,
  }: ICreatePurchaseDTO): Promise<void> {
    await this.purchasesRepository.create({
      approved,
      clientId,
      total,
    });
  }
}

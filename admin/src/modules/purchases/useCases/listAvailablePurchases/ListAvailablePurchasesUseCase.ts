import { Purchase } from "../../infra/typeorm/entities/Purchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

export class ListAvailablePurchasesUseCase {
  constructor(private purchasesRepository: IPurchasesRepository) {}

  async execute(): Promise<Purchase[]> {
    const purchases = await this.purchasesRepository.list();

    return purchases;
  }
}

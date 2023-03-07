import { ICreatePurchaseDTO } from "../../dtos/ICreatePurchaseDTO";
import { Purchase } from "../../infra/typeorm/entities/Purchase";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchaseRepositoryInMemory implements IPurchasesRepository {
  purchases: Purchase[] = [];

  async create(data: ICreatePurchaseDTO): Promise<void> {
    const purchase = new Purchase();

    Object.assign(purchase);

    this.purchases.push(purchase);
  }
}

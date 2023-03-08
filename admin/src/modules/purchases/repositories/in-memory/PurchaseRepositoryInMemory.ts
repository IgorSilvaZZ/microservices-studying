import { ICreatePurchaseDTO } from "../../dtos/ICreatePurchaseDTO";
import { Purchase } from "../../infra/typeorm/entities/Purchase";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchaseRepositoryInMemory implements IPurchasesRepository {
  purchases: Purchase[] = [];

  async list(): Promise<Purchase[]> {
    const purchases = this.purchases.filter((purchase) => !purchase.approved);

    console.log(purchases);

    return purchases;
  }

  async create(data: ICreatePurchaseDTO): Promise<void> {
    const purchase = new Purchase();

    Object.assign(purchase, data);

    this.purchases.push(purchase);
  }
}

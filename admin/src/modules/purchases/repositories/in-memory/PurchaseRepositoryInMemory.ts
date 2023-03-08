import { ICreatePurchaseDTO } from "../../dtos/ICreatePurchaseDTO";
import { Purchase } from "../../infra/typeorm/entities/Purchase";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchaseRepositoryInMemory implements IPurchasesRepository {
  purchases: Purchase[] = [];

  async list(): Promise<Purchase[]> {
    const purchases = this.purchases.filter((purchase) => !purchase.approved);

    return purchases;
  }

  async findById(purchaseId: string): Promise<Purchase> {
    const purchases = this.purchases.find(
      (purchase) => purchase.id === purchaseId
    );

    return purchases;
  }

  async create(data: ICreatePurchaseDTO): Promise<Purchase> {
    const purchase = new Purchase();

    Object.assign(purchase, data);

    this.purchases.push(purchase);

    return purchase;
  }

  async approved(purchaseId: string): Promise<Purchase> {
    const purchase = this.purchases.find(
      (purchase) => purchase.id === purchaseId
    );

    purchase.approved = true;

    return purchase
  }
}

import { Purchase } from "../../src/app/entities/Purchase";
import { PurchaseRepository } from "../../src/app/repositories/PurchaseRepository";

export class PurchaseRepositoryInMemory implements PurchaseRepository {
  purchases: Purchase[] = [];

  async list(): Promise<Purchase[]> {
    return this.purchases;
  }

  async findById(purchaseId: string): Promise<Purchase | null> {
    return this.purchases.find((purchase) => purchase.id === purchaseId);
  }

  async listPurchasesClient(clientId: string): Promise<Purchase[]> {
    const purchasesClient = this.purchases.filter(
      (purchase) => purchase.clientId === clientId
    );

    return purchasesClient;
  }

  async create(purchase: Purchase): Promise<void> {
    this.purchases.push(purchase);
  }

  async approvedPurchase(purchaseId: string): Promise<Purchase> {
    const purchase = this.purchases.find(
      (purchase) => purchase.id === purchaseId
    );

    purchase.approved = true;

    return purchase;
  }
}

import { Purchase } from "../entities/Purchase";

export abstract class PurchaseRepository {
  abstract create(purchase: Purchase): Promise<void>;
  abstract list(): Promise<Purchase[]>;
  abstract listPurchasesClient(clientId: string): Promise<Purchase[]>;
  abstract findById(purchaseId: string): Promise<Purchase | null>;
  abstract approvedPurchase(purchaseId: string): Promise<Purchase>;
}

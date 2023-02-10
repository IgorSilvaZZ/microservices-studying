import { Purchase } from "../entities/Purchase";

export abstract class PurchaseRepository {
  abstract create(purchase: Purchase): Promise<void>;
  abstract list(): Promise<Purchase[]>;
}

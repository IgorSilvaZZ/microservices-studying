import { ICreatePurchaseDTO } from "../dtos/ICreatePurchaseDTO";
import { Purchase } from "../infra/typeorm/entities/Purchase";

export interface IPurchasesRepository {
  create(data: ICreatePurchaseDTO): Promise<Purchase>;
  list(): Promise<Purchase[]>;
  findById(purchaseId: string): Promise<Purchase>;
  approved(purchaseId: string): Promise<Purchase>;
}

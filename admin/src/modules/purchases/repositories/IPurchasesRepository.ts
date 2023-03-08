import { ICreatePurchaseDTO } from "../dtos/ICreatePurchaseDTO";
import { Purchase } from "../infra/typeorm/entities/Purchase";

export interface IPurchasesRepository {
  create(data: ICreatePurchaseDTO): Promise<void>;
  list(): Promise<Purchase[]>;
}

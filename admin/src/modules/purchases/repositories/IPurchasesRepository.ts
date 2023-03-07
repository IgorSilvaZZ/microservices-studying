import { ICreatePurchaseDTO } from "../dtos/ICreatePurchaseDTO";

export interface IPurchasesRepository {
  create(data: ICreatePurchaseDTO): Promise<void>;
}

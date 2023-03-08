import { PurchasesRepository } from "../../infra/typeorm/repositories/PurchasesRepository";
import { ListAvailablePurchasesController } from "./ListAvailablePurchasesController";
import { ListAvailablePurchasesUseCase } from "./ListAvailablePurchasesUseCase";

export default (): ListAvailablePurchasesController => {
  const purchaseRepository = new PurchasesRepository();

  const listAvailablePurchasesUseCase = new ListAvailablePurchasesUseCase(
    purchaseRepository
  );

  const listAvailablePurchasesController = new ListAvailablePurchasesController(
    listAvailablePurchasesUseCase
  );

  return listAvailablePurchasesController;
};

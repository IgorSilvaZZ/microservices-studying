import { ListPurchasesClientUseCase } from "../../../../app/useCases/purchase/ListPurchasesClientUseCase";
import { PrismaClientRepository } from "../../../database/prisma/repositories/PrismaClientRepository";
import { PrismaPurchaseRepository } from "../../../database/prisma/repositories/PrismaPurchaseRepository";
import { ListPurchasesClientController } from "../../controllers/ListPurchasesClientController";

export default (): ListPurchasesClientController => {
  const clientRepository = new PrismaClientRepository();
  const purchaseRepository = new PrismaPurchaseRepository();

  const listPurchasesClientUseCase = new ListPurchasesClientUseCase(
    purchaseRepository,
    clientRepository
  );

  const listPurchasesClientController = new ListPurchasesClientController(
    listPurchasesClientUseCase
  );

  return listPurchasesClientController;
};

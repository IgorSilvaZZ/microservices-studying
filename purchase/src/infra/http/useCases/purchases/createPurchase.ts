import { CreatePurchaseUseCase } from "../../../../app/useCases/purchase/CreatePurchaseUseCase";
import { PrismaClientRepository } from "../../../database/prisma/repositories/PrismaClientRepository";
import { PrismaPurchaseRepository } from "../../../database/prisma/repositories/PrismaPurchaseRepository";
import { PurchasesWorker } from "../../../rabbitmq/workers/PurchasesWorker";
import { CreatePurchaseController } from "../../controllers/CreatePurchaseController";

export default (): CreatePurchaseController => {
  const clientRepository = new PrismaClientRepository();
  const purchaseRepository = new PrismaPurchaseRepository();

  const createPurchaseUseCase = new CreatePurchaseUseCase(
    purchaseRepository,
    clientRepository
  );

  const purchaseWorker = new PurchasesWorker();

  const createPurchaseController = new CreatePurchaseController(
    createPurchaseUseCase,
    purchaseWorker
  );

  return createPurchaseController;
};

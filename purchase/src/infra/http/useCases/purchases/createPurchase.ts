import { CreatePurchaseUseCase } from "../../../../app/useCases/purchase/CreatePurchaseUseCase";
import { PrismaClientRepository } from "../../../database/prisma/repositories/PrismaClientRepository";
import { PrismaPurchaseRepository } from "../../../database/prisma/repositories/PrismaPurchaseRepository";
import { CreatePurchaseController } from "../../controllers/CreatePurchaseController";

export default (): CreatePurchaseController => {
  const clientRepository = new PrismaClientRepository();
  const purchaseRepository = new PrismaPurchaseRepository();

  const createPurchaseUseCase = new CreatePurchaseUseCase(
    purchaseRepository,
    clientRepository
  );

  const createPurchaseController = new CreatePurchaseController(
    createPurchaseUseCase
  );

  return createPurchaseController;
};

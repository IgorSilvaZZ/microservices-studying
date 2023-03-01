import { CreatePurchaseUseCase } from "../../../../app/useCases/purchase/CreatePurchaseUseCase";
import { PrismaClientRepository } from "../../../database/prisma/repositories/PrismaClientRepository";
import { PrismaPurchaseRepository } from "../../../database/prisma/repositories/PrismaPurchaseRepository";
import { createMessageSender } from "../../../microservice/rabbitmq";
import { CreatePurchaseController } from "../../controllers/CreatePurchaseController";

export default (): CreatePurchaseController => {
  const clientRepository = new PrismaClientRepository();
  const purchaseRepository = new PrismaPurchaseRepository();

  const createPurchaseUseCase = new CreatePurchaseUseCase(
    purchaseRepository,
    clientRepository
  );

  const messageSender = createMessageSender("purchases");

  const createPurchaseController = new CreatePurchaseController(
    createPurchaseUseCase,
    messageSender
  );

  return createPurchaseController;
};

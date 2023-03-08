import { createMessageSender } from "../../../../shared/microservice/rabbitmq";
import { PurchasesRepository } from "../../infra/typeorm/repositories/PurchasesRepository";
import { ApprovedPurchaseController } from "./ApprovedPurchaseController";
import { ApprovedPurchaseUseCase } from "./ApprovedPurchaseUseCase";

export default (): ApprovedPurchaseController => {
  const purchasesRepository = new PurchasesRepository();

  const approvedPurchaseUseCase = new ApprovedPurchaseUseCase(
    purchasesRepository
  );

  const messageSender = createMessageSender("approved-purchase");

  const approvedPurchaseController = new ApprovedPurchaseController(
    approvedPurchaseUseCase,
    messageSender
  );

  return approvedPurchaseController;
};

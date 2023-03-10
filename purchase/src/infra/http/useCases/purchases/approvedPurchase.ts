import { ApprovedPurchaseUseCase } from "../../../../app/useCases/purchase/ApprovedPurchaseUseCase";
import { PrismaPurchaseRepository } from "../../../database/prisma/repositories/PrismaPurchaseRepository";
import { createMessageReceiver } from "../../../microservice/rabbitmq";

interface ApprovedMessage {
  purchaseId: string;
}

export default () => {
  try {
    const messageReceiver = createMessageReceiver("approved-purchase");

    const purchaseRepository = new PrismaPurchaseRepository();

    const approvedPurchaseUseCase = new ApprovedPurchaseUseCase(
      purchaseRepository
    );

    messageReceiver.receive(async (message) => {
      const { purchaseId }: ApprovedMessage = JSON.parse(message);

      await approvedPurchaseUseCase.execute(purchaseId);

      console.log(`Compra: ${purchaseId} aprovada!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

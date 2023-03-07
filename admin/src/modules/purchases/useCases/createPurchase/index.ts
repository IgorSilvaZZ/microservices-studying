import { AppErrors } from "../../../../shared/errors/AppErrors";
import { createMessageReceiver } from "../../../../shared/microservice/rabbitmq";

import { ICreatePurchaseDTO } from "../../dtos/ICreatePurchaseDTO";
import { PurchasesRepository } from "../../infra/typeorm/repositories/PurchasesRepository";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

export default () => {
  try {
    const messageReceiver = createMessageReceiver("purchases");

    const purchasesRepository = new PurchasesRepository();
    const createPurchaseUseCase = new CreatePurchaseUseCase(
      purchasesRepository
    );

    messageReceiver.receive(async (message) => {
      const messageParsed = JSON.parse(message);

      const createPurchaseData: ICreatePurchaseDTO = {
        approved: false,
        clientId: messageParsed.clientId,
        total: messageParsed.total,
      };

      await createPurchaseUseCase.execute(createPurchaseData);
    });
  } catch (error) {
    console.log(error);
    // throw new AppErrors(error.message);
  }
};

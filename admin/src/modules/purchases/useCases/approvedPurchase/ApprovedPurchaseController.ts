import { Request, Response } from "express";
import { MessageSender } from "../../../../shared/microservice/rabbitmq/MessageSender";
import { ApprovedPurchaseUseCase } from "./ApprovedPurchaseUseCase";

export class ApprovedPurchaseController {
  constructor(
    private approvedPurchaseUseCase: ApprovedPurchaseUseCase,
    private messageSender: MessageSender
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { purchaseId } = req.params;

      const purchaseApproved = await this.approvedPurchaseUseCase.execute(
        purchaseId
      );

      const messageParsed = JSON.stringify({ purchaseId });

      await this.messageSender.send(messageParsed);

      return res.json(purchaseApproved);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

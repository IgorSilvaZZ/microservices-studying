import { Request, Response } from "express";

import { CreatePurchaseUseCase } from "../../../app/useCases/purchase/CreatePurchaseUseCase";
import { MessageSender } from "../../microservice/rabbitmq/MessageSender";

export class CreatePurchaseController {
  constructor(
    private createPurchaseUseCase: CreatePurchaseUseCase,
    private messageSender: MessageSender
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { total, clientId } = req.body;

    try {
      // await this.createPurchaseUseCase.execute({ total, clientId });

      const messageSenderParsed = JSON.stringify({ total, clientId });

      await this.messageSender.send(messageSenderParsed);

      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

import { Request, Response } from "express";

import { CreatePurchaseUseCase } from "../../../app/useCases/purchase/CreatePurchaseUseCase";
import { PurchasesWorker } from "../../rabbitmq/workers/PurchasesWorker";

export class CreatePurchaseController {
  constructor(
    private createPurchaseUseCase: CreatePurchaseUseCase,
    private purchaseWorker: PurchasesWorker
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { total, clientId } = req.body;

    try {
      await this.createPurchaseUseCase.execute({ total, clientId });

      const messageParsed = JSON.stringify({ total, clientId });

      await this.purchaseWorker.publish("purchases", messageParsed);

      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

import { Request, Response } from "express";

import { CreatePurchaseUseCase } from "../../../app/useCases/purchase/CreatePurchaseUseCase";

export class CratePurchaseController {
  constructor(private createPurchaseUseCase: CreatePurchaseUseCase) {}

  async handle(req: Request, res: Response) {
    const { total, clientId } = req.body;

    try {
      await this.createPurchaseUseCase.execute({ total, clientId });

      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

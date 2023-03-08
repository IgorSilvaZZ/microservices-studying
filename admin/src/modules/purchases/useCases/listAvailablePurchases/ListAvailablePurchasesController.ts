import { Request, Response } from "express";
import { ListAvailablePurchasesUseCase } from "./ListAvailablePurchasesUseCase";

export class ListAvailablePurchasesController {
  constructor(
    private listAvailablePurchasesUseCase: ListAvailablePurchasesUseCase
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const purchases = await this.listAvailablePurchasesUseCase.execute();

      return res.json(purchases);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

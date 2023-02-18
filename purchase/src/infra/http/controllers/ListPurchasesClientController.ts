import { Request, Response } from "express";

import { ListPurchasesClientUseCase } from "../../../app/useCases/purchase/ListPurchasesClientUseCase";

export class ListPurchasesClientController {
  constructor(private listPurchasesClientUseCase: ListPurchasesClientUseCase) {}

  async handler(req: Request, res: Response): Promise<Response> {
    const { clientId } = req.params;

    try {
      const purchasesClient = await this.listPurchasesClientUseCase.execute({
        clientId,
      });

      return res.status(200).json(purchasesClient);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

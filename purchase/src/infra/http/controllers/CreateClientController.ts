import { Request, Response } from "express";

import { CreateClientUseCase } from "../../../app/useCases/client/CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email, password, type } = req.body;

    try {
      await this.createClientUseCase.execute({ name, email, password, type });

      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

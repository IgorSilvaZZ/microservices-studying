import { Request, Response } from "express";
import { z } from "zod";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {

      const createUserBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        role: z.string(),
      });
  
      const { name, email, password, role } = createUserBody.parse(req.body);
  
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        role,
      });
  
      return res.send();
      
    } catch (erro) {
        return res.status(400).json({ message: erro.message })
    }
  }
}

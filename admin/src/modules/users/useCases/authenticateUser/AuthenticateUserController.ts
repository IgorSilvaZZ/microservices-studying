import { Request, Response } from "express";
import { z } from "zod";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const authenticateUserBody = z.object({
        email: z.string().email(),
        password: z.string(),
      });

      const { email, password } = authenticateUserBody.parse(req.body);

      const { token } = await this.authenticateUserUseCase.execute({
        email,
        password,
      });

      return res.json({ token });
    } catch (erro) {
      return res.status(400).json({ message: erro.message });
    }
  }
}

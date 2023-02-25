import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../../../modules/users/infra/typeorm/repositories/UsersRepository";
import { AppErrors } from "../../../errors/AppErrors";

interface IPayload {
  sub: string;
}

export async function ensureAutheticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppErrors("Invalid Token!!");
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "c38d2554a47067dba649709913530e2a"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const usersExists = await usersRepository.findById(user_id);

    if (!usersExists) {
      throw new AppErrors("User not exists!");
    }

    req.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppErrors("Invalid Token!!");
  }
}

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { AppErrors } from "../../../../shared/errors/AppErrors";
import { IAuth } from "../../dtos/IAuthDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IAuth) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppErrors("Email/Password incorrect!!");
    }

    if (!(await compare(password, user.password))) {
      throw new AppErrors("Email/Password incorrect!!");
    }

    const token = sign({}, "c38d2554a47067dba649709913530e2a", {
      subject: user.id,
      expiresIn: "1h",
    });

    return { token };
  }
}

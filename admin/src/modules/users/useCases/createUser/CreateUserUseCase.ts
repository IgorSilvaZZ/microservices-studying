import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { AppErrors } from "../../../../shared/errors/AppErrors";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    password,
    email,
    role,
  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppErrors("User Already Exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      role,
    });
  }
}

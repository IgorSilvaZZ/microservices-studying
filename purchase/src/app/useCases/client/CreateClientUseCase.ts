import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/ClientRepository";

interface IClientCreateRequest {
  name: string;
  email: string;
  password: string;
  type: string;
}

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    name,
    email,
    password,
    type,
  }: IClientCreateRequest): Promise<void> {
    const clientExits = await this.clientRepository.findByEmail(email);

    if (clientExits) {
      throw new Error("User already exits");
    }

    const client = new Client({
      name,
      email,
      password,
      type,
    });

    await this.clientRepository.create(client);
  }
}

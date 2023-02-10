import { Client } from "../../src/app/entities/Client";
import { ClientRepository } from "../../src/app/repositories/ClientRepository";

export class ClientRepositoryInMemory implements ClientRepository {
  clients: Client[] = [];

  async findById(id: string): Promise<Client | null> {
    const client = this.clients.find((client) => client.id === id) ?? null;

    return client;
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client =
      this.clients.find((client) => client.email === email) ?? null;

    return client;
  }

  async create(client: Client): Promise<void> {
    this.clients.push(client);
  }
}

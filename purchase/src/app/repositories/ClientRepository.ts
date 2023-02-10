import { Client } from "../entities/Client";

export abstract class ClientRepository {
  abstract create(client: Client): Promise<void>;
  abstract findByEmail(email: string): Promise<Client | null>;
  abstract findById(id: string): Promise<Client | null>;
}

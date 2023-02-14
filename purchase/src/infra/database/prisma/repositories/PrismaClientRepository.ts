import { Client } from "../../../../app/entities/Client";
import { ClientRepository } from "../../../../app/repositories/ClientRepository";
import { PrimaClientMapper } from "../mappers/PrismaClientMapper";

import { prisma } from "..";

export class PrismaClientRepository implements ClientRepository {
  async findById(id: string): Promise<Client | null> {
    const client = await prisma.client.findFirst({
      where: { id },
    });

    if (!client) {
      return client;
    }

    return PrimaClientMapper.toDomain(client);
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await prisma.client.findFirst({
      where: { email },
    });

    if (!client) {
      return null;
    }

    return PrimaClientMapper.toDomain(client);
  }

  async create(client: Client): Promise<void> {
    const clientRaw = PrimaClientMapper.toPrisma(client);

    await prisma.client.create({
      data: clientRaw,
    });
  }
}

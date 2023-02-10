import { Client as RawClient} from "@prisma/client";

import { Client } from "../../../../app/entities/Client";

export class PrimaClientMapper {
  static toPrisma(client: Client) {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      password: client.password,
      type: client.type,
      createdAt: client.createdAt,
    };
  }

  static toDomain(raw: RawClient): Client {
    return new Client({
      name: raw.name,
      email: raw.email,
      password: raw.password,
      type: raw.type,
      createdAt: raw.createdAt
    });
  }
}

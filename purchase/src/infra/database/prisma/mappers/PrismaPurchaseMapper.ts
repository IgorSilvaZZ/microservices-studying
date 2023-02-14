import { Purchase as RawPurchase } from "@prisma/client";

import { Purchase } from "../../../../app/entities/Purchase";

export class PrismaPurchaseMapper {
  static toPrisma(purchase: Purchase) {
    return {
      id: purchase.id,
      clientId: purchase.clientId,
      total: purchase.total,
      createdAt: purchase.createdAt,
    };
  }

  static toDomain(raw: RawPurchase) {
    return new Purchase({
      total: raw.total,
      clientId: raw.clientId,
      createdAt: raw.createdAt,
    });
  }
}

import { Purchase } from "../../../../app/entities/Purchase";
import { PurchaseRepository } from "../../../../app/repositories/PurchaseRepository";

import { prisma } from "..";
import { PrismaPurchaseMapper } from "../mappers/PrismaPurchaseMapper";

export class PrismaPurchaseRepository implements PurchaseRepository {
  async list(): Promise<Purchase[]> {
    const purchases = await prisma.purchase.findMany();

    return purchases.map(PrismaPurchaseMapper.toDomain);
  }

  async create(purchase: Purchase): Promise<void> {
    const purchaseRaw = PrismaPurchaseMapper.toPrisma(purchase);

    await prisma.purchase.create({
      data: purchaseRaw,
    });
  }
}

import { Purchase } from "../../../../app/entities/Purchase";
import { PurchaseRepository } from "../../../../app/repositories/PurchaseRepository";

import { prisma } from "..";
import { PrismaPurchaseMapper } from "../mappers/PrismaPurchaseMapper";

export class PrismaPurchaseRepository implements PurchaseRepository {
  async list(): Promise<Purchase[]> {
    const purchases = await prisma.purchase.findMany();

    return purchases.map(PrismaPurchaseMapper.toDomain);
  }

  async findById(purchaseId: string): Promise<Purchase | null> {
    const purchase = await prisma.purchase.findUnique({
      where: {
        id: purchaseId,
      },
    });

    if (!purchase) {
      return null;
    }

    return PrismaPurchaseMapper.toDomain(purchase);
  }

  async listPurchasesClient(clientId: string): Promise<Purchase[]> {
    const purchasesClient = await prisma.purchase.findMany({
      where: {
        clientId,
      },
    });

    return purchasesClient.map(PrismaPurchaseMapper.toDomain);
  }

  async create(purchase: Purchase): Promise<void> {
    const purchaseRaw = PrismaPurchaseMapper.toPrisma(purchase);

    await prisma.purchase.create({
      data: purchaseRaw,
    });
  }

  async approvedPurchase(purchaseId: string): Promise<Purchase> {
    const purchaseApproved = await prisma.purchase.update({
      where: {
        id: purchaseId,
      },
      data: {
        approved: true,
      },
    });

    return PrismaPurchaseMapper.toDomain(purchaseApproved);
  }
}

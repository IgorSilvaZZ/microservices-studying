import { Purchase } from "../../entities/Purchase";
import { ClientRepository } from "../../repositories/ClientRepository";
import { PurchaseRepository } from "../../repositories/PurchaseRepository";

interface PurchaseRequest {
  clientId: string;
  total: number;
}

export class CreatePurchaseUseCase {
  constructor(
    private purchaseRepositoru: PurchaseRepository,
    private clientRepository: ClientRepository
  ) {}

  async execute({ clientId, total }: PurchaseRequest): Promise<void> {
    const clientExists = await this.clientRepository.findById(clientId);

    if (!clientExists) {
      throw new Error("Client not found!");
    }

    const purchase = new Purchase({
      clientId,
      total,
      approved: false,
    });

    await this.purchaseRepositoru.create(purchase);
  }
}

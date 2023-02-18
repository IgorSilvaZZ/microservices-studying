import { ClientRepository } from "../../repositories/ClientRepository";
import { PurchaseRepository } from "../../repositories/PurchaseRepository";

interface ListPurchasesClientRequest {
  clientId: string;
}

export class ListPurchasesClientUseCase {
  constructor(
    private purchaseRepository: PurchaseRepository,
    private clientRepository: ClientRepository
  ) {}

  async execute({ clientId }: ListPurchasesClientRequest) {
    const clientExists = await this.clientRepository.findById(clientId);

    if (!clientExists) {
      throw new Error("Client not fot found!");
    }

    const purchasesClient = await this.purchaseRepository.listPurchasesClient(
      clientId
    );

    return purchasesClient;
  }
}

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

export class ApprovedPurchaseUseCase {
  constructor(private purchasesRepository: IPurchasesRepository) {}

  async execute(purchaseId: string): Promise<void> {
    const purchaseExists = await this.purchasesRepository.findById(purchaseId);

    if (!purchaseExists) {
      throw new Error("Purchase not found!!");
    }

    await this.purchasesRepository.approved(purchaseId);
  }
}

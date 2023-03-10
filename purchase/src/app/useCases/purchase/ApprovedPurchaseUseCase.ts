import { PurchaseRepository } from "../../repositories/PurchaseRepository";

export class ApprovedPurchaseUseCase {
  constructor(private purchaseRepository: PurchaseRepository) {}

  async execute(purchaseId: string) {
    console.log(purchaseId);

    const purchaseExists = await this.purchaseRepository.findById(purchaseId);

    if (!purchaseExists) {
      throw new Error("Purchase not found!");
    }

    const approvedPurchase = await this.purchaseRepository.approvedPurchase(
      purchaseId
    );

    return approvedPurchase;
  }
}

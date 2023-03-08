import { PurchaseRepositoryInMemory } from "../../repositories/in-memory/PurchaseRepositoryInMemory";
import { ApprovedPurchaseUseCase } from "./ApprovedPurchaseUseCase";

let purchasesRepositoryInMemory: PurchaseRepositoryInMemory;
let approvedPurchaseUseCase: ApprovedPurchaseUseCase;

describe("Approved purchase", () => {
  beforeEach(() => {
    purchasesRepositoryInMemory = new PurchaseRepositoryInMemory();
    approvedPurchaseUseCase = new ApprovedPurchaseUseCase(
      purchasesRepositoryInMemory
    );
  });

  it("should be able approved a purchase", async () => {
    const { id: purchaseId } = await purchasesRepositoryInMemory.create({
      approved: false,
      clientId: "test-client-id",
      total: 2750,
    });

    await approvedPurchaseUseCase.execute(purchaseId);

    const purchase = await purchasesRepositoryInMemory.findById(purchaseId);

    expect(purchase.approved).toEqual(true);
  });

  it("not be able approved a purchase not exits", () => {
    expect(async () => {
      await approvedPurchaseUseCase.execute("purchase-id-not-exists");
    }).rejects.toEqual(new Error("Purchase not found!!"));
  });
});

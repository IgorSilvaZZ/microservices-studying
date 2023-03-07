import { PurchaseRepositoryInMemory } from "../../repositories/in-memory/PurchaseRepositoryInMemory";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

describe("Create Purchase", () => {
  it("should be able a new purchase", async () => {
    const purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();
    const createPurchaseUseCase = new CreatePurchaseUseCase(
      purchaseRepositoryInMemory
    );

    await createPurchaseUseCase.execute({
      approved: false,
      clientId: "client-id-test",
      total: 2400,
    });

    expect(purchaseRepositoryInMemory.purchases).toHaveLength(1);
  });
});

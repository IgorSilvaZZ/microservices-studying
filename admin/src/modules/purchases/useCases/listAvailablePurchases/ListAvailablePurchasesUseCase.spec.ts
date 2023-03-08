import { PurchaseRepositoryInMemory } from "../../repositories/in-memory/PurchaseRepositoryInMemory";
import { ListAvailablePurchasesUseCase } from "./ListAvailablePurchasesUseCase";

describe("List available purchases", () => {
  it("should be able available purchases", async () => {
    const purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();

    const listAvailablePurchasesUseCase = new ListAvailablePurchasesUseCase(
      purchaseRepositoryInMemory
    );

    await purchaseRepositoryInMemory.create({
      approved: false,
      clientId: "test-client-id",
      total: 3500,
    });

    await purchaseRepositoryInMemory.create({
      approved: false,
      clientId: "test-client-id1",
      total: 250,
    });

    await purchaseRepositoryInMemory.create({
      approved: true,
      clientId: "test-client-id",
      total: 2150,
    });

    const availablePurchases = await listAvailablePurchasesUseCase.execute();

    expect(availablePurchases).toHaveLength(2);
  });
});

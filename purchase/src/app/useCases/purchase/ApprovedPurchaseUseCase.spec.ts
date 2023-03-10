import { beforeEach, describe, expect, it } from "vitest";
import { PurchaseRepositoryInMemory } from "../../../../test/repositories/PurchaseRepositoryInMemory";
import { Purchase } from "../../entities/Purchase";
import { ApprovedPurchaseUseCase } from "./ApprovedPurchaseUseCase";

let purchaseRepositoryInMemory: PurchaseRepositoryInMemory;
let approvedPurchaseUseCase: ApprovedPurchaseUseCase;

describe("Approved Purchase", () => {
  beforeEach(() => {
    purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();
    approvedPurchaseUseCase = new ApprovedPurchaseUseCase(
      purchaseRepositoryInMemory
    );
  });

  it("should be able approved a purchase", async () => {
    const purchase = new Purchase({
      total: 2500,
      clientId: "client-id-test",
      approved: false,
    });

    await purchaseRepositoryInMemory.create(purchase);

    const purchaseExists = await purchaseRepositoryInMemory.findById(
      purchase.id
    );

    await approvedPurchaseUseCase.execute(purchaseExists.id);

    expect(purchaseExists.approved).toEqual(true);
  });

  it("should not be able approved purchase not exists", () => {
    expect(async () => {
      await approvedPurchaseUseCase.execute("purchase-not-exists");
    }).rejects.toThrow();
  });
});

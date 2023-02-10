import { describe, expect, it, beforeEach } from "vitest";
import { ClientRepositoryInMemory } from "../../../../test/repositories/ClientRepositoryInMemory";
import { PurchaseRepositoryInMemory } from "../../../../test/repositories/PurchaseRepositoryInMemory";
import { Client } from "../../entities/Client";
import { Purchase } from "../../entities/Purchase";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let purchaseRepositoryInMemory: PurchaseRepositoryInMemory;
let createPurchaseUseCase: CreatePurchaseUseCase;

describe("Purchase", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();
    createPurchaseUseCase = new CreatePurchaseUseCase(
      purchaseRepositoryInMemory,
      clientRepositoryInMemory
    );
  });

  it("should be able create a new purchase", async () => {
    const client = new Client({
      name: "Igor Silva",
      email: "igor@email.com",
      password: "123",
      type: "Standard",
    });

    await clientRepositoryInMemory.create(client);

    await createPurchaseUseCase.execute({
      clientId: client.id,
      total: 25000,
    });

    expect(purchaseRepositoryInMemory.purchases).toHaveLength(1);
    expect(purchaseRepositoryInMemory.purchases[0].clientId).toEqual(client.id);
  });
});

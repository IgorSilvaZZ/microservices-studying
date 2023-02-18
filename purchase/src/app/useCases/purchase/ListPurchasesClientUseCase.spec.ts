import { beforeEach, describe, expect, it } from "vitest";

import { Client } from "../../entities/Client";
import { ClientRepositoryInMemory } from "../../../../test/repositories/ClientRepositoryInMemory";
import { PurchaseRepositoryInMemory } from "../../../../test/repositories/PurchaseRepositoryInMemory";
import { ListPurchasesClientUseCase } from "./ListPurchasesClientUseCase";
import { Purchase } from "../../entities/Purchase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let purchaseRepositoryInMemory: PurchaseRepositoryInMemory;
let listPurchasesClientUseCase: ListPurchasesClientUseCase;

describe("List Purchases Clients", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    purchaseRepositoryInMemory = new PurchaseRepositoryInMemory();
    listPurchasesClientUseCase = new ListPurchasesClientUseCase(
      purchaseRepositoryInMemory,
      clientRepositoryInMemory
    );
  });

  it("should be able list purchases with client", async () => {
    const client = new Client({
      name: "Igor Silva",
      email: "igor@email.com",
      password: "123",
      type: "Standard",
    });

    await clientRepositoryInMemory.create(client);

    const purchaseOne = new Purchase({
      clientId: client.id,
      total: 2500,
    });

    const purchaseTwo = new Purchase({
      clientId: client.id,
      total: 2500,
    });

    await purchaseRepositoryInMemory.create(purchaseOne);
    await purchaseRepositoryInMemory.create(purchaseTwo);

    const purchasesClient = await listPurchasesClientUseCase.execute({
      clientId: client.id,
    });

    expect(purchasesClient).toHaveLength(2);
  });
});

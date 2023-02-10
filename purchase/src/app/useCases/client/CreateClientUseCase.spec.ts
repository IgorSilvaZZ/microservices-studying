import { describe, it, beforeEach, expect } from "vitest";

import { ClientRepositoryInMemory } from "../../../../test/repositories/ClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";

let clientRepositoryInMemory: ClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("Create Client", () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
  });

  it("should be able create a new client", async () => {
    await createClientUseCase.execute({
      name: "Igor Silva",
      email: "igor@email.com",
      password: "123",
      type: "Standard",
    });

    expect(clientRepositoryInMemory.clients).toHaveLength(1);
    expect(clientRepositoryInMemory.clients[0].name).toEqual("Igor Silva");
  });

  it("should not be able create client with email already exits", async () => {
    await createClientUseCase.execute({
      name: "Igor Silva",
      email: "igor@email.com",
      password: "123",
      type: "Standard",
    });

    expect(() => {
      return createClientUseCase.execute({
        name: "Lucas Silva",
        email: "igor@email.com",
        password: "123456",
        type: "Premium",
      });
    }).rejects.toThrow();
  });
});

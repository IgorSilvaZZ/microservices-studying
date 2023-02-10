import { describe, expect, it } from "vitest";
import { Client } from "./Client";

describe("Client", () => {
  it("should be able to create a client", async () => {
    const client = new Client({
      name: "Igor Silva",
      email: "igor@email.com",
      password: "123",
      type: "Standard",
    });

    expect(client).toBeTruthy();
  });
});

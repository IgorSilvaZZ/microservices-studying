import { describe, expect, it } from "vitest";
import { Purchase } from "./Purchase";

describe("Purchase", () => {
  it("should be able to create a purchase", async () => {
    const purchase = new Purchase({
      clientId: "test-client-id",
      total: 25000,
      approved: false,
    });

    expect(purchase).toBeTruthy();
  });
});

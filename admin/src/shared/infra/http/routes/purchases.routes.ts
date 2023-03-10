import { Router } from "express";
import { ensureAutheticated } from "../middlewares/ensureAutheticated";

const purchasesRoutes = Router();

import listAvailablePurchasesController from "../../../../modules/purchases/useCases/listAvailablePurchases";
import approvedPurchaseController from "../../../../modules/purchases/useCases/approvedPurchase";

purchasesRoutes.get("/available", ensureAutheticated, (req, res) => {
  return listAvailablePurchasesController().handle(req, res);
});

purchasesRoutes.post(
  "/approved/:purchaseId",
  ensureAutheticated,
  (req, res) => {
    return approvedPurchaseController().handle(req, res);
  }
);

export { purchasesRoutes };

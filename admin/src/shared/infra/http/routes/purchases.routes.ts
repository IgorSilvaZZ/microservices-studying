import { Router } from "express";
import { ensureAutheticated } from "../middlewares/ensureAutheticated";

const purchasesRoutes = Router();

import listAvailablePurchasesController from "../../../../modules/purchases/useCases/listAvailablePurchases";

purchasesRoutes.get("/available", ensureAutheticated, (req, res) => {
  return listAvailablePurchasesController().handle(req, res);
});

export { purchasesRoutes };

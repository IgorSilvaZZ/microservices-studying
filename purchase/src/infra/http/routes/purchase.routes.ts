import { Router } from "express";

import createPurchaseController from "../useCases/purchases/createPurchase";

const routerPurchase = Router();

routerPurchase.post("/", (req, res) => {
  return createPurchaseController().handle(req, res);
});

export { routerPurchase };

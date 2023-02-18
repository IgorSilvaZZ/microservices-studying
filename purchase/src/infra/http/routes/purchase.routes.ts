import { Router } from "express";

import createPurchaseController from "../useCases/purchases/createPurchase";
import listPurchasesClient from "../useCases/purchases/listPurchasesClient";

const routerPurchase = Router();

routerPurchase.post("/", (req, res) => {
  return createPurchaseController().handle(req, res);
});

routerPurchase.get("/:clientId", (req, res) => {
  return listPurchasesClient().handler(req, res);
});

export { routerPurchase };

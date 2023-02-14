import { Router } from "express";

import { routerClients } from "./clients.routes";
import { routerPurchase } from "./purchase.routes";

const routes = Router();

routes.use("/clients", routerClients);
routes.use("/purchases", routerPurchase);

export { routes };

import { Router } from "express";
import { routerClients } from "./clients.routes";

const routes = Router();

routes.use("/clients", routerClients);

export { routes };

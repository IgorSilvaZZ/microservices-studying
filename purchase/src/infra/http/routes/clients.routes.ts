import { Router } from "express";

import createClientController from "../useCases/clients/createClient";

const routerClients = Router();

routerClients.post("/", (req, res) => {
  return createClientController().handle(req, res);
});

export { routerClients };

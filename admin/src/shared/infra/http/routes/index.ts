import { Router } from "express";

import authenticateUserController from "../../../../modules/users/useCases/authenticateUser";

import { usersRoutes } from "./users.routes";
import { purchasesRoutes } from "./purchases.routes";

const routes = Router();

routes.post("/auth", (req, res) => {
  return authenticateUserController().handle(req, res);
});

routes.use("/users", usersRoutes);
routes.use("/purchases", purchasesRoutes);

export { routes };

import { Router } from "express";

import authenticateUserController from "../../../../modules/users/useCases/authenticateUser";

import { usersRoutes } from "./users.routes";

const routes = Router();

routes.post("/auth", (req, res) => {
  return authenticateUserController().handle(req, res);
});

routes.use("/users", usersRoutes);

export { routes };

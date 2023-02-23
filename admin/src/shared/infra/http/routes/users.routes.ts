import { Router } from "express";

const usersRoutes = Router();

import createUserController from "../../../../modules/users/useCases/createUser";

usersRoutes.post("/", (req, res) => {
  return createUserController().handle(req, res);
});

export { usersRoutes };

import { CreateClientUseCase } from "../../../../app/useCases/client/CreateClientUseCase";
import { PrismaClientRepository } from "../../../database/prisma/repositories/PrismaClientRepository";
import { CreateClientController } from "../../controllers/CreateClientController";

export default (): CreateClientController => {
  const clientRepository = new PrismaClientRepository();

  const createClientUseCase = new CreateClientUseCase(clientRepository);

  const createClientController = new CreateClientController(
    createClientUseCase
  );

  return createClientController;
};

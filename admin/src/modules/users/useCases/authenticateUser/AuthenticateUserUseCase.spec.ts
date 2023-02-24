import { AppErrors } from "../../../../shared/errors/AppErrors";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
  });

  it("should be able authenticate a user", async () => {
    const userAdminCreate = {
      name: "Igor Admin",
      email: "igor@admin.com",
      password: "123",
      role: "OPR",
    };

    await createUserUseCase.execute(userAdminCreate);

    const response = await authenticateUserUseCase.execute({
      email: userAdminCreate.email,
      password: userAdminCreate.password,
    });

    expect(response).toHaveProperty("token");
  });

  it("should not be able authenticate user incorrect email or password", () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "Igor Admin",
        email: "igor@admin.com",
        password: "123",
        role: "OPR",
      });

      await authenticateUserUseCase.execute({
        email: "igor@admin.com",
        password: "incorrect-password",
      });
    }).rejects.toEqual(new AppErrors("Email/Password incorrect!!"));
  });
});

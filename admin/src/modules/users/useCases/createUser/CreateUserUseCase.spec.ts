import { AppErrors } from "../../../../shared/errors/AppErrors";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Create a user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able a new user", async () => {
    expect(() => {
      createUserUseCase.execute({
        name: "Igor Admin",
        email: "igor@admin.com",
        password: "123",
        role: "OPR",
      });
    }).toBeTruthy();
  });

  it("should not be able create user already exists", () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "Igor Admin",
        email: "igor@admin.com",
        password: "123",
        role: "OPR",
      });

      await createUserUseCase.execute({
        name: "Igor Admin",
        email: "igor@admin.com",
        password: "123",
        role: "OPR",
      });
    }).rejects.toEqual(new AppErrors("User Already Exists!"));
  });
});

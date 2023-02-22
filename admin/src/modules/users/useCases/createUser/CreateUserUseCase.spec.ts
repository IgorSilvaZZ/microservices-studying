import { UsersRepositoryInMemory } from "../../infra/typeorm/repositories/in-memory/UsersRepositoryInMemory";
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
});

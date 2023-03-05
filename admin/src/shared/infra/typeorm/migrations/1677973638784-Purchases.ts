import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Purchases1677973638784 implements MigrationInterface {
  name = "Purchases1677973638784";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchases",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "total",
            type: "double",
          },
          {
            name: "clientId",
            type: "uuid",
          },
          {
            name: "approved",
            type: "boolean",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchases");
  }
}

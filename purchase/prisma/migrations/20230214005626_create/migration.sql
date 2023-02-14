/*
  Warnings:

  - You are about to drop the column `createdAt` on the `clients` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "purchases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total" REAL NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "purchases_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_clients" ("email", "id", "name", "password", "type") SELECT "email", "id", "name", "password", "type" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_purchases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total" REAL NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "purchases_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_purchases" ("clientId", "id", "total") SELECT "clientId", "id", "total" FROM "purchases";
DROP TABLE "purchases";
ALTER TABLE "new_purchases" RENAME TO "purchases";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

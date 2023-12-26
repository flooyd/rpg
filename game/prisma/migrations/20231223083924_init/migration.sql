-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT,
    "order" INTEGER NOT NULL,
    "saga" TEXT NOT NULL,
    "chapter" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "expression" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "event" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "message" TEXT NOT NULL,
    "indices" TEXT NOT NULL
);

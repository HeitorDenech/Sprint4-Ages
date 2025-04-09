-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "profile_img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Salas" (
    "id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "acessLevel" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Salas_id_key" ON "Salas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Salas_description_key" ON "Salas"("description");

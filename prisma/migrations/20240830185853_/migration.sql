/*
  Warnings:

  - You are about to alter the column `name` on the `guest` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `guest` MODIFY `name` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `list` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list_items` (
    `id` VARCHAR(191) NOT NULL,
    `list_id` VARCHAR(191) NOT NULL,
    `item` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sorteio` (
    `id` VARCHAR(191) NOT NULL,
    `list_id` VARCHAR(191) NOT NULL,
    `guest_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `list_items` ADD CONSTRAINT `list_items_list_id_fkey` FOREIGN KEY (`list_id`) REFERENCES `list`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sorteio` ADD CONSTRAINT `sorteio_guest_id_fkey` FOREIGN KEY (`guest_id`) REFERENCES `guest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sorteio` ADD CONSTRAINT `sorteio_list_id_fkey` FOREIGN KEY (`list_id`) REFERENCES `list`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

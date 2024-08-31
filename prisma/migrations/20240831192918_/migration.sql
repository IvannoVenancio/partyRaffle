/*
  Warnings:

  - You are about to drop the column `description` on the `list` table. All the data in the column will be lost.
  - You are about to drop the `list_items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `list_items` DROP FOREIGN KEY `list_items_list_id_fkey`;

-- DropForeignKey
ALTER TABLE `sorteio` DROP FOREIGN KEY `sorteio_guest_id_fkey`;

-- DropForeignKey
ALTER TABLE `sorteio` DROP FOREIGN KEY `sorteio_list_id_fkey`;

-- AlterTable
ALTER TABLE `list` DROP COLUMN `description`,
    ADD COLUMN `items` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `sorteio` MODIFY `list_id` VARCHAR(191) NULL,
    MODIFY `guest_id` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `list_items`;

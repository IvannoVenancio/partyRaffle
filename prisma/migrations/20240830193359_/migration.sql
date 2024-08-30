/*
  Warnings:

  - You are about to drop the column `description` on the `list` table. All the data in the column will be lost.
  - You are about to drop the `list_items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `sorteio_guest_id_fkey` ON `sorteio`;

-- DropIndex
DROP INDEX `sorteio_list_id_fkey` ON `sorteio`;

-- AlterTable
ALTER TABLE `list` DROP COLUMN `description`,
    ADD COLUMN `items` LONGTEXT NOT NULL;

-- DropTable
DROP TABLE `list_items`;

-- AddForeignKey
ALTER TABLE `sorteio` ADD CONSTRAINT `sorteio_guest_id_fkey` FOREIGN KEY (`guest_id`) REFERENCES `guest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `pwd` VARCHAR(191) NOT NULL,
    `tipoDeUsuario` VARCHAR(191) NOT NULL,
    `tipoDeCuenta` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hora` VARCHAR(191) NOT NULL,
    `duracion` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,
    `idCancha` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cancha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `localizacion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_idCancha_fkey` FOREIGN KEY (`idCancha`) REFERENCES `Cancha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;


DROP SCHEMA IF EXISTS `basedatostinderperros2` ;

CREATE SCHEMA IF NOT EXISTS `basedatostinderperros2`;

USE `basedatostinderperros2` ;

DROP TABLE IF EXISTS `basedatostinderperros2`.`razasmascota` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`razasmascota` (
  `nombreRaza` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nombreRaza`));

DROP TABLE IF EXISTS `basedatostinderperros2`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(15) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL,
  `tipoUsuario` VARCHAR(10) NULL,
  `descripcion` VARCHAR(140) NULL DEFAULT NULL,
  `etiquetasPersona` VARCHAR(255) NULL DEFAULT NULL,
  `etiquetasMascota` VARCHAR(255) NULL DEFAULT NULL,
  `numeroTelefono` INT NULL DEFAULT NULL,
  `fotoPerfil` BLOB NULL DEFAULT NULL,
  `fotos` BLOB NULL DEFAULT NULL,
  `fechaNacimiento` DATE NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(5) NULL DEFAULT NULL,
  `nombreUsuario` VARCHAR(15) NOT NULL,
  `contrasenya` VARCHAR(15) NOT NULL,
  `razasmascota_nombreRaza` VARCHAR(45) DEFAULT NULL,
  `correoElectronico` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombreUsuario_UNIQUE` (`nombreUsuario` ASC) VISIBLE,
  INDEX `fk_Usuario_razasmascota_idx` (`razasmascota_nombreRaza` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_razasmascota`
    FOREIGN KEY (`razasmascota_nombreRaza`)
    REFERENCES `basedatostinderperros2`.`razasmascota` (`nombreRaza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

DROP TABLE IF EXISTS `basedatostinderperros2`.`Match` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Match` (
  `Usuario_id1` INT NOT NULL,
  `Usuario_id2` INT NOT NULL,
  `estado` VARCHAR(10) NULL,
  PRIMARY KEY (`Usuario_id1`, `Usuario_id2`),
  INDEX `fk_Usuario_has_Usuario_Usuario2_idx` (`Usuario_id2` ASC) VISIBLE,
  INDEX `fk_Usuario_has_Usuario_Usuario1_idx` (`Usuario_id1` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_Usuario_Usuario1`
    FOREIGN KEY (`Usuario_id1`)
    REFERENCES `basedatostinderperros2`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Usuario_Usuario2`
    FOREIGN KEY (`Usuario_id2`)
    REFERENCES `basedatostinderperros2`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO basedatostinderperros2.razasmascota(nombreRaza)VALUES
("Labrador retriever"),
("Bulldog francés"),
("Golden retriever"),
("Pastor alemán"),
("Caniche"),
("Bulldog"),
("Beagle"),
("Rottweiler"),
("Labrador"),
("Chihuahua");


INSERT INTO basedatostinderperros2.usuario(nombre,apellido,tipoUsuario,descripcion,etiquetasPersona,etiquetasMascota ,numeroTelefono ,fotoPerfil ,fotos,fechaNacimiento ,direccion ,codigoPostal,nombreUsuario ,contrasenya,correoElectronico) VALUES
("jordi","perez","persona","hola buenos dias","activo","joven",687078172,"flskdjflsj","ldjfslkdjf","1980-08-08","calle 1234",08031,"jordi123","contrasenyaa12","jordicampos.97@gmail.com");

select * from usuarios

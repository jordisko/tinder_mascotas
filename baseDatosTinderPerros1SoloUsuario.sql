
DROP SCHEMA IF EXISTS `basedatostinderperros2` ;

CREATE SCHEMA IF NOT EXISTS `basedatostinderperros2`;

USE `basedatostinderperros2` ;

DROP TABLE IF EXISTS `basedatostinderperros2`.`razasmascota` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`razamascota` (
  `nombreRaza` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nombreRaza`));

DROP TABLE IF EXISTS `basedatostinderperros2`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(15) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL,
  `tipoUsuario` VARCHAR(10) NULL,
  `descripcion` VARCHAR(140) NULL DEFAULT NULL,
  `etiquetasPersona` VARCHAR(255) NULL DEFAULT NULL,
  `etiquetasMascota` VARCHAR(255) NULL DEFAULT NULL,
  `numeroTelefono` INT NULL DEFAULT NULL,
  `fotoPerfil` VARCHAR(255) NULL,
  `fotos` VARCHAR(255) NULL,
  `fechaNacimiento` DATE NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  `codigoPostal` VARCHAR(5) NULL DEFAULT NULL,
  `nombreUsuario` VARCHAR(15) NOT NULL,
  `contrasenya` VARCHAR(15) NOT NULL,
  `razamascota_nombreRaza` VARCHAR(45) DEFAULT NULL,
  `correoElectronico` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombreUsuario_UNIQUE` (`nombreUsuario` ASC) VISIBLE,
  INDEX `fk_Usuario_razamascota_idx` (`razamascota_nombreRaza` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_razasmascota`
    FOREIGN KEY (`razamascota_nombreRaza`)
    REFERENCES `basedatostinderperros2`.`razamascota` (`nombreRaza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

DROP TABLE IF EXISTS `basedatostinderperros2`.`Matches` ;

CREATE TABLE IF NOT EXISTS `basedatostinderperros2`.`Matches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarioid1` INT NOT NULL,
  `usuarioid2` INT NOT NULL,
  `estado` VARCHAR(10) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuarios_has_Usuarios_usuarioid2_idx` (`usuarioid2` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios_usuarioid1idx` (`usuarioid1` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid1`
    FOREIGN KEY (`usuarioid1`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios_usuarioid2`
    FOREIGN KEY (`usuarioid2`)
    REFERENCES `basedatostinderperros2`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO basedatostinderperros2.razamascota(nombreRaza)VALUES
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


INSERT INTO basedatostinderperros2.Usuarios(nombre,apellido,tipoUsuario,descripcion,etiquetasPersona,etiquetasMascota ,numeroTelefono ,fotoPerfil ,fotos,fechaNacimiento ,direccion ,codigoPostal,nombreUsuario,contrasenya, razamascota_nombreRaza ,correoElectronico) VALUES
("jordi","perez","persona","hola buenos dias","activo","joven",687078172,"flskdjflsj","ldjfslkdjf","1980-08-08","calle 1234",08031,"jordi123","contrasenya12",NULL,"jordicampos.97@gmail.com"),
("bobby","perez","mascota","muy amigable","muy activo","sociable",687078173,"fdsfdsf","dwewrwerw","2010-09-09","calle 12314214",08031,"bobby123","contrasenyaa12","labrador","bobby123@gmail.com");



INSERT INTO basedatostinderperros2.matches(usuarioid1,usuarioid2,estado) VALUES
(1,2,"aceptado");


SELECT matches.usuarioid1, usuarios.etiquetasPersona , usuarios.etiquetasMascota, usuarios.codigoPostal, matches.usuarioid2
FROM matches
LEFT JOIN usuarios
    ON matches.usuarioid1 = usuarios.id 
WHERE usuarios.id = matches.usuarioid1;
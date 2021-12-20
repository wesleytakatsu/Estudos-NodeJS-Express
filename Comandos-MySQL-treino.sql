/*
Para fins didáticos adicionei alguns comentários em alguns comandos.
Em geral os comandos são auto explicativos e no treinamento considero que já tenha adquirido conhecimento de SQL antes.
Os comandos são apenas lembretes caso precise.

Aqui pode copiar e colar tudo de uma vez que já cria todo o banco de dados.
*/

CREATE DATABASE treinoDeExpress;

USE treinoDeExpress;

CREATE TABLE usuarios(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(100),
	idade INT,

	PRIMARY KEY (`id`)
);

-- show tables;

INSERT INTO usuarios(
	nome,
	email,
	idade
) VALUES(
	"Wesley Takatsu",
	"wesley@teste.com.br",
	30
);

INSERT INTO usuarios(
	nome,
	email,
	idade
) VALUES(
	"Anderson Takatsu",
	"anderson@teste.com.br",
	26
);

INSERT INTO usuarios(
	nome,
	email,
	idade
) VALUES(
	"Felipe Sieiro",
	"felipe@teste.com.br",
	20
);


/*
SELECT * from usuarios;
SELECT * from usuarios where nome = "Wesley Takatsu";
SELECT * from usuarios where idade < 25;
DELETE FROM usuarios;
Cuidado: Esse de cima apaga todos os registros da tabela.

DELETE FROM usuarios WHERE nome = "Wesley Takatsu";

TRUNCATE usuarios;

UPDATE usuarios SET idade = 31 WHERE nome = "Wesley Takatsu";
*/








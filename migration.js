const db = require("./db")

async function criar_tabelas() {
    try {
        await db.pool.query(`
            DROP TABLE IF EXISTS cliente;
            CREATE TABLE cliente (
                    id int(11) NOT NULL AUTO_INCREMENT,
                    nome varchar(100) NOT NULL,
                    cpf char(14) NOT NULL,
                    celular char(14) NOT NULL,
                    email varchar(100) NOT NULL,
                    senha varchar(512) NOT NULL,
                    PRIMARY KEY (id),
                    UNIQUE KEY cpf (cpf),
                    UNIQUE KEY email (email)
                ) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
            INSERT INTO cliente VALUES 
                (12,'Guilherme Godoy','123.456.789-00','(42)99966-4444','gudoy@gmail.com','$2b$10$N8b2YuzXWdMJVAAd670qG.ScLlmdFsuTJ7C6/GWtMKWhj8O0pU6Pu'),(33,'Mariana Souza','245.871.369-12','(41)98877-2211','mariana.souza@outlook.com','$2b$10$X7b2YuzXWdMJVAAd670qG.ScLlmdFsuTJ7C6/GWtMKWhj8O0pUABC'),
                (14,'Pedro Nathan','123.123.123-12','(42)999669966','pedroN@gmail.com','$2b$10$MZMnDj10f7JnV6ArP.5hm.TAHDZ5NwECYSw6i5kbNowwhPuqbC/W.'),(34,'Carlos Eduardo Ribeiro','389.152.741-05','(11)97123-4567','carlos.edu@hotmail.com','$2b$10$rNwWgUx8kezhoZXXuVG7NeBXqPFAzpkc37Sg4P.ETVtiSaWWqBDEF'),
                (28,'Antonio wesley','111.222.333-49','(42)99999-4444','tonhão@gmail.com','$2b$10$QRU70xwZs0JYccsQcf/BFe7IIGYaqlS0xb.TIkGsv7UKviM2A26pq'),(29,'Kauã silva de lima','152.915.999-79','(42)99999-4444','kaua.lima11@escola.pr.gov.br','$2b$10$Ax80a.N/1RUsBU48IO1hX.d4hyiNt/15aV8.8VJuPziVuzTwGe8ly'),
                (30,'Beatriz Soares','120.897.429-76','(42)99830-3607','biazinha@gmail.com','$2b$10$t8fYQCnQRXxvbLczF6YJNu31UvNT1qWhZ1r9GiftnFLy1rABdFKfG'),(32,'Nicolas Galvão','137.604.709-80','(42)99999-4444','galvão@gmail.com','$2b$10$QA3mNPH90POZijUIri.hKO5pQQH223KGKyYOYycQA0GtPuKGhPrkS');
            `)
        console.log("Estrutura e dados da tabela 'cliente' criado com sucesso!")
        process.exit(0);
    } catch (error) {
        console.log(error)
    }
}
criar_tabelas()

CREATE DATABASE consultorio;

\c consultorio;

CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    idade NUMERIC NOT NULL
);

CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    paciente TEXT NOT NULL,
    data DATE NOT NULL,
    hora TIME NOT NULL
);

INSERT INTO pacientes (name, email, idade) VALUES
('Lucas', 'lucas@gmail.com', 25),
('Luiza', 'lulu2gmail.com', 17),
('Lia', 'lia@gmail.com', 13),
('Ana', 'ana@gmail.com', 30),
('João', 'joao@gmail.com', 40),
('Maria', 'maria@gmail.com', 22),
('Pedro', 'pedro@gmail.com', 28),
('Laura', 'laura@gmail.com', 35),
('Rafael', 'rafa@gmail.com', 29),
('Fernanda', 'fer@gmail.com', 31),
('Clara', 'clara@gmail.com', 19),
('Carlos', 'carlos@gmail.com', 45),
('Beatriz', 'beatriz@gmail.com', 32),
('Eduardo', 'eduardo@gmail.com', 27),
('Sofia', 'sofia@gmail.com', 21),
('Gabriel', 'gabriel@gmail.com', 36),
('Isabela', 'isabela@gmail.com', 29),
('Felipe', 'felipe@gmail.com', 33),
('Camila', 'camila@gmail.com', 25),
('Ricardo', 'ricardo@gmail.com', 41),
('Juliana', 'juliana@gmail.com', 38),
('Marcos', 'marcos@gmail.com', 50),
('Patrícia', 'patricia@gmail.com', 28),
('Rogério', 'rogerio@gmail.com', 47),
('Larissa', 'larissa@gmail.com', 24),
('Thiago', 'thiago@gmail.com', 31),
('Fernanda', 'fernanda@gmail.com', 26),
('André', 'andre@gmail.com', 35),
('Vanessa', 'vanessa@gmail.com', 30),
('Leonardo', 'leonardo@gmail.com', 40),
('Carolina', 'carolina@gmail.com', 22),
('Rafael', 'rafael@gmail.com', 34),
('Amanda', 'amanda@gmail.com', 23),
('Lucas', 'lucas2@gmail.com', 28),
('Ana', 'ana2@gmail.com', 37),
('Pedro', 'pedro2@gmail.com', 39),
('Maria', 'maria2@gmail.com', 42),
('João', 'joao2@gmail.com', 45),
('Clara', 'clara2@gmail.com', 19),
('Luiz', 'luiz@gmail.com', 33),
('Helena', 'helena@gmail.com', 27),
('Bruno', 'bruno@gmail.com', 29),
('Alice', 'alice@gmail.com', 20),
('Diego', 'diego@gmail.com', 32),
('Paula', 'paula@gmail.com', 25),
('Gustavo', 'gustavo@gmail.com', 30),
('Renata', 'renata@gmail.com', 28),
('Marcelo', 'marcelo@gmail.com', 35),
('Tatiana', 'tatiana@gmail.com', 31),
('Rodrigo', 'rodrigo@gmail.com', 40),
('Simone', 'simone@gmail.com', 36);

INSERT INTO consultas (name, paciente, data, hora) VALUES
('Ortopedia', 'Lucas', '2025/09/21', '10:00'),
('Oftalmologia', 'Luiza', '2025/12/21', '10:30'),
('Pediatria', 'Lia', '2025/07/21', '11:15'),
('Dentista', 'Ana', '2025/10/21', '11:30'),
('Fisiatria', 'João', '2025/08/21', '12:00'),
('Dermatologia', 'Maria', '2025/08/21', '12:30'),
('Neurologia', 'Pedro', '2025/07/21', '13:00'),
('Psiquiatria', 'Laura', '2025/06/21', '13:30'),
('Endocrinologia', 'Rafael', '2025/09/21', '14:20'),
('Cardiologia', 'Fernanda', '2025/05/21', '14:30'),
('Ortopedia', 'Clara', '2025/09/21', '15:00'),
('Ginecologia', 'Beatriz', '2025/10/01', '09:00'),
('Cardiologia', 'Carlos', '2025/11/01', '09:30'),
('Dermatologia', 'Eduardo', '2025/12/01', '10:00'),
('Neurologia', 'Sofia', '2025/09/01', '10:30'),
('Psiquiatria', 'Gabriel', '2025/08/01', '11:00'),
('Ortopedia', 'Isabela', '2025/07/01', '11:30'),
('Pediatria', 'Felipe', '2025/06/01', '12:00'),
('Fisioterapia', 'Camila', '2025/05/01', '12:30'),
('Endocrinologia', 'Ricardo', '2025/04/01', '13:00'),
('Oftalmologia', 'Juliana', '2025/03/01', '13:30'),
('Gastroenterologia', 'Marcos', '2025/02/01', '14:00'),
('Urologia', 'Patrícia', '2025/01/01', '14:30'),
('Reumatologia', 'Rogério', '2025/12/15', '15:00'),
('Nefrologia', 'Larissa', '2025/11/15', '15:30'),
('Hematologia', 'Thiago', '2025/10/15', '16:00'),
('Oncologia', 'Fernanda', '2025/09/15', '16:30'),
('Alergologia', 'André', '2025/08/15', '17:00'),
('Infectologia', 'Vanessa', '2025/07/15', '17:30'),
('Pneumologia', 'Leonardo', '2025/06/15', '18:00'),
('Nutrição', 'Carolina', '2025/05/15', '18:30'),
('Geriatria', 'Rafael', '2025/04/15', '19:00'),
('Fonoaudiologia', 'Amanda', '2025/03/15', '19:30'),
('Odontologia', 'Lucas', '2025/02/15', '20:00'),
('Psicologia', 'Ana', '2025/01/15', '20:30'),
('Acupuntura', 'Pedro', '2025/12/10', '21:00'),
('Homeopatia', 'Maria', '2025/11/10', '21:30'),
('Quiropraxia', 'João', '2025/10/10', '22:00'),
('Fisiatria', 'Clara', '2025/09/10', '22:30'),
('Terapia Ocupacional', 'Luiz', '2025/08/10', '23:00'),
('Medicina do Trabalho', 'Helena', '2025/07/10', '23:30'),
('Medicina Esportiva', 'Bruno', '2025/06/10', '08:00'),
('Medicina Estética', 'Alice', '2025/05/10', '08:30'),
('Medicina Nuclear', 'Diego', '2025/04/10', '09:00'),
('Medicina Preventiva', 'Paula', '2025/03/10', '09:30'),
('Medicina Intensiva', 'Gustavo', '2025/02/10', '10:00'),
('Medicina Legal', 'Renata', '2025/01/10', '10:30'),
('Medicina de Família', 'Marcelo', '2025/12/05', '11:00'),
('Medicina Tropical', 'Tatiana', '2025/11/05', '11:30'),
('Medicina Alternativa', 'Rodrigo', '2025/10/05', '12:00'),
('Medicina Integrativa', 'Simone', '2025/09/05', '12:30');

ALTER TABLE pacientes ADD COLUMN photo TEXT;

ALTER TABLE consultas ADD COLUMN photo TEXT;
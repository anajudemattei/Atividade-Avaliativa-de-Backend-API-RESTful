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
('Clara', 'clara@gmail.com', 19);

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
('Ortopedia', 'Clara', '2025/09/21', '15:00');


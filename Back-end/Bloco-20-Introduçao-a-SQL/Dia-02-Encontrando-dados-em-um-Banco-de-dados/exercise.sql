-- Exercício 1: Mostrar um texto

SELECT 'This is SQL Exercise, Practice and Solution' AS `introduçao`;

-- Exercício 2: Mostrar 3 números em 3 colunas

SELECT 1 AS `numero1`, 2 AS `numero2`, 3 AS `numero3`;

-- Exercício 3: Mostrar o resultado de uma soma

SELECT 10 + 15 AS `soma`;

-- Exercício 4: Mostrar o resultado de uma multiplicação

SELECT 10 * 2 AS `multiplicaçao`;

-- Exercício 5: Selecionar todas as colunas de todos os cientistas

SELECT * FROM Scientists.Scientists;

-- Exercício 6: Selecionar nome e horas de cada projeto alterando o nome das colunas

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

-- Exercício 7: Selecionar nome de cientistas em ordem alfabética

SELECT Name
FROM Scientists.Scientists
ORDER BY Name;

-- Exercício 8: Selecionar nome dos projetos em ordem alfabética decrescente

SELECT Name
FROM Scientists.Projects
ORDER BY Name DESC;

-- Exercício 9: Como o exercício 6, mas concatenando um texto específico

SELECT CONCAT('O projeto', ' ', Name, ' ', 'precisou de', ' ', Hours, ' ', 'horas para ser concluído.') AS `resultado_final`
FROM Scientists.Projects;

-- Exercício 10: Selecione os três projetos com maior número de Horas

SELECT *
FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

-- Exercício 11: Selecione o código de todos os projetos da tabela AssignedTo sem que haja repetições

SELECT DISTINCT(Project) FROM Scientists.AssignedTo;

-- Exercício 12: Selecione o número de quantos cientistas trabalharam nos projetos

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists.Scientists;
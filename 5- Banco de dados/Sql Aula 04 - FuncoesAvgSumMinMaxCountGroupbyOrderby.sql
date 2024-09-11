select * from veiculos;

-- Funções Soma, Média, Mínimo e Máximo
select
	SUM(valor) AS 'Soma dos preços',
    AVG(valor) AS 'Média dos preços',
    MIN(valor) AS 'Menor preço',
    MAX(valor) AS 'Maior preço'
FROM veiculos;

-- contando todos os registros de uma tabela
select count(*) from veiculos;

-- contando todos os registro com condição
select count(cor) from veiculos
where cor = 'preto';

-- contando quantos tem de acordo com uma coluna
select nome, count(*)
from veiculos
group by nome;

select cor, count(*)
from veiculos
group by cor;

-- contando e agrupando pela coluna filtrado por uma condição
select cor, count(*)
from veiculos
where ano < 1980
group by cor;

-- total em vendas por fabricante, demonstrando quantos foram vendidos e sua média
select 
	fabricante as 'Fabricante', 
	count(fabricante) as 'Veículos vendidos', 
    sum(valor) as 'Total', 
    avg(valor) as 'Média por fabricante'
from veiculos
group by fabricante
order by total;
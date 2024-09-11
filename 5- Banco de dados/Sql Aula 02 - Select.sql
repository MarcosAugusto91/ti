-- SELECT
       
-- Selecionando toda a tabela       
select * from veiculos;

-- Selecionando campos específicos de uma tabela
select nome, ano, valor AS 'preço'
from veiculos;

-- Selecionando tabela filtrando por campo
select * from veiculos
where cor ='Preto';

-- Ordenando a busca realizada de forma crescente
select * from veiculos
where cor = 'Preto'
order by valor;

-- Ordenando a busca realizada de forma descrecente
select * from veiculos
order by valor desc;

-- Renomeando coluna da tabela
select 
	nome,
    fabricante,
    valor AS 'preço',
    ano    
from veiculos;

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





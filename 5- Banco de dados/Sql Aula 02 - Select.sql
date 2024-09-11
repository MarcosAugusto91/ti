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
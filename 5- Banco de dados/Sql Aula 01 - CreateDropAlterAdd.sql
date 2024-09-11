-- Criando o banco
create database aula_01;

-- Deletando o banco
drop database aula01;

-- Criando a tabela
create table veiculos (
	id_veiculos int primary key auto_increment,
    nome varchar(90),
	placa varchar(10), 
    fabricante varchar(90), 
    modelo varchar(90), 
    cor varchar(20)
    );
    	
-- Deletando a tabela
drop table veiculos;

-- Alterando a tabela e inserindo novos campos
alter table veiculos
add ano int,
add motor Double(2,2),
add valor Decimal(10,2);
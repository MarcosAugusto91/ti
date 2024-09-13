create database pokemon;

create table Tipo (
	idTipo int primary key auto_increment not null,
    nome varchar(90) not null,
    vantagem int,
    desvantagem int
);

create table Pokemon (
	idPokemon int primary key auto_increment not null,
    nome varchar(90) not null,
    foto varchar(90),
    regiao varchar(90),
    idTipo int,
    Constraint fkPokemonTipo foreign key (idTipo) references Tipo (idTipo)
);
    
create table Treinador (
	idTreinador int primary key auto_increment not null,
    nome varchar(90) not null,
    genero varchar(90) not null,
    dtNascimento date,
    email varchar(200)
);
    
    -- criando uma tabela com duas chaves estrangeiras
create table Capturados (
	idCapturados int primary key auto_increment not null,
    vida int not null, 
    ataque1 varchar(90) not null,
    ataque2 varchar(90),
    ataque3 varchar(90),
	idTreinador int,
    Constraint fkCapturadosTreinador foreign key (idTreinador) references Treinador (idTreinador),
    idPokemon int, 
    Constraint fkCapturadosPokemon foreign key (idPokemon) references Pokemon (idPokemon)
);
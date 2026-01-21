CREATE DATABASE php_com_pdo
CHARACTER SET utf8mb4 
COLLATE utf8mb4_general_ci;

create table tb_usuarios(
	id int not null primary key auto_increment,
	nome varchar(25) not null,
	email longtext not null,
	senha varchar(10) not null);

create table tb_status(
	id int not null primary key auto_increment,
    status varchar(25) not null
);

insert into tb_status(status)values('pendente');
insert into tb_status(status)values('realizado');

create table tb_tarefas(
	id int not null primary key auto_increment,
    id_status int not null default 1,
    foreign key(id_status) references tb_status(id),
	tarefa text not null,
    data_cadastrado datetime not null default current_timestamp
)

insert into tb_usuarios
values (1, 'Marcos Augusto'			,'marcosaugusto@hotmail.com'	,'123456');

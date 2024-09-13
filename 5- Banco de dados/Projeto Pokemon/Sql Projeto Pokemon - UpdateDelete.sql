-- Alterando o nome de uma coluna na tabela - My SQL
ALTER TABLE tipo
CHANGE COLUMN nome tipo varchar(90);

select * from tipo;
select * from pokemon;

insert into pokemon(nome, regiao, idTipo)
	values
		('blablabla','blablabla',3);
        
update pokemon
	set nome = 'Kakunda', regiao = 'Johto'
    where idPokemon = 3;

-- Gera o erro de tentar excluir por um campo que não é chave primária
delete from pokemon
where regiao = 'blablabla';
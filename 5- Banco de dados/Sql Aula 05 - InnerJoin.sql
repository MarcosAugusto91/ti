select pokemon.nome, tipo.nome
from pokemon inner join tipo
on pokemon.idTipo = tipo.idTipo
order by tipo.nome;


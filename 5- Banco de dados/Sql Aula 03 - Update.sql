-- Altera todos os registros: CUIDADO COM ESSE COMANDO - NÃO UTILIZAR
update veiculos
	set placa = 'ABC1234';

-- Altera o valor da coluna de acordo com uma condição: UTILIZAR SEMPRE ESTA FORMA
update veiculos
	set cor = 'Vermelho'
    where id_veiculos in (1,2);
    
    select * from veiculos;

-- Altera todos os registros: CUIDADO COM ESSE COMANDO
update veiculos
	set placa = 'ABC1234';

-- Altera o valor da coluna de acordo com uma condição: UTILIZAR SEMPRE ESTA FORMA
update veiculos
	set cor = 'amarelo'
    where id_veiculos = 5;

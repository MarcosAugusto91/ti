-- INSERT

-- Inserindo todos os dados de um veiculo
insert into veiculos
values (1, 'ka'			,'FEJ2987'	,'Ford'			,'se'	,'Preto'	,'2015'	,1.0	,47000),
	   (2,	'Ferrari'	,'GEG2641'	,'Ferrari'		,'xs'	,'Vermelho'	,'2023'	,3.0	,547000), 
	   (3,	'Porshe'	,'HEH1895'	,'Porshe'		,'pn'	,'Amarelo'	,'2021'	,3.0	,447000),
	   (4,	'Fusca'		,'BWS2961'	,'Volkswagen'	,'fu'	,'Preto'	,'1940'	,1.0	,12000),
	   (5,	'Uno'		,'PMM'		,'Fiat'			,'un'	,'cinza'	,'2005'	,1.5	,15000);
       
-- Inserindo dados específicos
insert into veiculos (nome, placa, fabricante, modelo, cor, ano, motor, valor)
values 
		('Mustang'	,'BQS8526'	,'Mustang'	,'mu'	,'verde'	,'2019'	,2.5	,247000),
	    ('Palio'	,'JQP1261'	,'Fiat'		,'pa'	,'prata'	,'2010'	,1.0	,19000);
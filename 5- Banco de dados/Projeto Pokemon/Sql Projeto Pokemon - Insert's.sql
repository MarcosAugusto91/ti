insert into tipo (nome)
	values 
		('Fogo'),
        ('Água'),
        ('Elétrico'),
        ('Planta'),
        ('Inseto'),
        ('Normal'),
        ('Lutador'),
        ('Venenoso'),
        ('Gelo'),
        ('Voador'),
        ('Psiquíco'),
        ('Pedra'),
        ('Fantasma'),
        ('Dragão'),
        ('Sombrio'),
        ('Terra'),
        ('Fada');
        
select * from tipo;
        
insert into pokemon (nome, regiao, idTipo)
values
	('Chicorita',   'Johto', 4),
	('Cyndaquil',   'Johto', 1),
	('Totodile',    'Johto', 2),
	('Pidgey',      'Johto', 10),
	('Gengar',      'Johto', 13),
	('Pikachu',    'Kanto', 3),
    ('Squirtle',   'Kanto', 2),
    ('Chamander',  'Kanto', 1),
    ('Bulbassaur', 'Kanto', 4),
    ('Chalizard',  'Kanto', 1),
    ('Mewtwo',     'Kanto', 11),
    ('Mew',        'Kanto', 11),
    ('Zapdos',     'Kanto', 3),
    ('Moltres',    'Kanto', 1),
    ('Articuno',   'Kanto', 9),
    ('Ratata',     'Kanto', 6),
    ('Meowth',     'Kanto', 6);
    
select * from tipo;
select * from pokemon;

select regiao, nome from pokemon
where regiao = 'Johto';

select * from pokemon
order by nome desc;

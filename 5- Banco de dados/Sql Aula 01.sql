create table veiculos (
	id_veiculos int primary key auto_increment,
	placa varchar(10), 
    fabricante varchar(90), 
    modelo varchar(90), 
    cor varchar(20)
    );
    	
drop table veiculos;

alter table veiculos
add ano int,
add motor Double(2,2),
add valor Decimal(10,2);
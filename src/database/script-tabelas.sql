drop database specula;
create database specula;

use specula;

create table empresa(
	id_empresa int primary key auto_increment,
    nome_empresa varchar(60),
    cnpj char(20),
    cep char(20),
    bairro varchar(45),
    logradouro varchar(45),
    cidade varchar(45)
);

#INSERT LOCAL
insert into empresa values 
(null,"Solução sempre LTDA", "2237525263", 08532120, "Tanquinho", "Rua Neusa Rodrigues", "São paulo"),
(null,"Box delivery LTDA", "4273527324", 08264723, "Centro", "Rua Haddock Lobo", "São paulo");

#INSERT AZURE
insert into empresa values
('Solução sempre LTDA', '2237525263', 08532120, 'Tanquinho', 'Rua Neusa Rodrigues', 'São paulo'),
('Box delivery LTDA', '4273527324', 08264723, 'Centro', 'Rua Haddock Lobo', 'São paulo');

create table usuario_suporte (
	id_usuario_suporte int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa),
    fk_gestor int,
    foreign key(fk_gestor) references usuario_suporte(id_usuario_suporte),
    cargo_usuario_suporte varchar(45),
    nome_usuario_suporte varchar(45),
    email_usuario_suporte varchar(45),
    senha_usuario_suporte varchar(45),
    sub_usuario_suporte varchar(45)
);

create table setor (
	id_setor int primary key auto_increment,
    nome_setor varchar(45)
);

create table usuario_maquina(
	id_usuario_maquina int primary key auto_increment,
    fk_setor int,
    foreign key(fk_setor) references setor(id_setor),
    nome_usuario_maquina varchar(45),
    cargo_usuario_maquina varchar(45),
    identificacao_usuario varchar(45),
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa)
    
);

#INSERT LOCAL
insert into usuario_maquina (nome_usuario_maquina, identificacao_usuario) values
("n1","n1");


#INSERT AZURE
insert into usuario_maquina (nome_usuario_maquina, identificacao_usuario) values
('n1','n1');

#INSERT AZURE
insert into maquina values
(1, null, 'sim', 'bd01','amd', 'tecpix', 'sucess', 'ubuntu');


create table maquina (
	id_maquina int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa),
	fk_usuario_maquina int,
    foreign key(fk_usuario_maquina) references usuario_maquina(id_usuario_maquina),
    isActive varchar(15),
    codigo_patrimonio varchar(45),
    cpu_detalhe varchar(45),
    ram_detalhe varchar(45),
    disco_detalhe varchar(45),
    sistema_operacional varchar(45)
);


create table historico_maquina (
	id_historico int primary key auto_increment,
    fk_maquina int,
    foreign key(fk_maquina) references maquina(id_maquina),
    sistema_operacional varchar(30),
    memoriaRam_emUso varchar (30),
    memoriaRam_disponivel varchar(30),
    processador_emUso varchar(30),
    disco_emUso varchar(30)
    data_hora_registro varchar(30) default current_timestamp
); 


select * from empresa;
select * from usuario_suporte;
select * from setor;
select * from usuario_maquina ;  
select * from maquina;
select * from historico_maquina;

truncate empresa;
truncate usuario_suporte;
truncate setor;
truncate usuario_maquina;
truncate maquina;
truncate historico_maquina;
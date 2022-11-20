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
(null,"Empresa do Matheus", "08532120", 08532120, "Tanquinho", "Rua neusa rodrigues", "São paulo");

#INSERT AZURE
insert into empresa values
('Empresa do Matheus', '08532120', '08532120', 'Tanquinho', 'Rua neusa rodrigues', 'São paulo');

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


create table maquina (
	id_maquina int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa),
	fk_usuario_maquina int,
    foreign key(fk_usuario_maquina) references usuario_maquina(id_usuario_maquina),
    isActivade varchar(15),
    codigo_patrimonio varchar(45),
    cpu_detalhe varchar(45),
    ram_detalhe varchar(45),
    disco_detalhe varchar(45)
);

insert into maquina (fk_empresa,fk_usuario_maquina,codigo_patrimonio) values
(1,1,2121212);

create table historico_maquina (
	id_historico int primary key auto_increment,
    fk_maquina int,
    foreign key(fk_maquina) references maquina(id_maquina),
    sistema_operacional varchar(30),
    memoria_em_uso varchar (30),
    memoria_disponivel varchar(30),
    processador_em_uso varchar(30),
    data_hora_registro datetime default current_timestamp
);

create table base_conhecimento (
    id_descricao int primary key auto_increment,
    fk_usuario_suporte int,
    foreign key(fk_usuario_suporte) references usuario_suporte(id_usuario_suporte),
    descricao varchar(255),
    data_hora_descricao datetime default current_timestamp
);

UPDATE maquina SET isActivade = '1',codigo_patrimonio = 'kauan',cpu_detalhe = 'Kauan',ram_detalhe = 'Kauan',disco_detalhe = 'Matheus'  WHERE id_maquina = 1;

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
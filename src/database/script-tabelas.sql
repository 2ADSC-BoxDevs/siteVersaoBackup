create database specula;
use specula;

create table empresa(
	id_empresa int primary key auto_increment,
    nome_empresa varchar(60),
    cnpj char(14),
    cep bigint,
    bairro varchar(45),
    logradouro varchar(45),
    cidade varchar(45)
);

create table usuario_suporte (
	id_usuario_suporte int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa),
    fk_gestor int,
    foreign key(fk_gestor) references usuario_suporte(id_usuario_suporte),
    cargo_usuario_suporte varchar(45),
    nome_usuario_suporte varchar(45),
    email_usuario_suporte varchar(45),
    senha_usuario_suporte varchar(45)
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
    identificacao_usuario varchar(45)
);

create table maquina (
	id_maquina int primary key auto_increment,
    fk_empresa int,
    foreign key(fk_empresa) references empresa(id_empresa),
	fk_usuario_maquina int,
    foreign key(fk_usuario_maquina) references usuario_maquina(id_usuario_maquina),
	-- modificar nome na modelagem
    codigo_patrimonio varchar(45),
    cpu_detalhe varchar(45),
    ram_detalhe varchar(45),
    disco_detalhe varchar(45)
);  

create table historico_maquina (
	id_historico int primary key auto_increment,
    fk_maquina int,
    foreign key(fk_maquina) references maquina(id_maquina),
	cpu_dados varchar(45),
    ram_dados varchar(45),
    disco_dados varchar(45),
    data_hora_registro datetime default current_timestamp                                                                                
);

create table base_conhecimento (
    id_descricao int primary key auto_increment,
    fk_usuario_suporte int,
    foreign key(fk_usuario_suporte) references usuario_suporte(id_usuario_suporte),
    descricao varchar(255),
    data_hora_descricao datetime default current_timestamp
)
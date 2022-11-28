const { cp } = require("fs");
var database = require("../database/config")

function listar(req, res) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario_maquina.*, setor.*, empresa.* 
    FROM usuario_maquina
    JOIN setor
    ON usuario_maquina.fk_setor=setor.id_setor
    JOIN empresa
    ON usuario_maquina.fk_empresa_usuario=empresa.id_empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMaquinas(req, res) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT maquina.*, usuario_maquina.*, empresa.*
    FROM maquina
    left join usuario_maquina
    ON maquina.fk_usuario_maquina=usuario_maquina.id_usuario_maquina
    join empresa
    on maquina.Fk_empresa=empresa.id_empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarSuporte(req, res) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario_suporte.*, empresa.*
    FROM usuario_suporte
    join empresa
    ON usuario_suporte.fk_empresa=empresa.id_empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario_suporte WHERE email_usuario_suporte = '${email}' AND senha_usuario_suporte = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarGoogle(email, sub) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, sub)
    var instrucao = `
        SELECT * FROM usuario_suporte WHERE email_usuario_suporte = '${email}' AND sub_usuario_suporte = '${sub}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function cadastrar(fk_empresa, fk_gestor, cargo, nome, email, senha, sub) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
       INSERT INTO usuario_suporte (fk_empresa, fk_gestor, cargo_usuario_suporte, nome_usuario_suporte, email_usuario_suporte, senha_usuario_suporte, sub_usuario_suporte) values (${fk_empresa}, ${fk_gestor}, '${cargo}', '${nome}', '${email}', '${senha}', '${sub}');
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    
    return database.executar(instrucao);
}

function cadastrarUser(fk_gestor, fk_empresa, cargo, nome, email, senha, sub) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
    INSERT INTO usuario_maquina values (null, #SETOR, #EMPRESA, '#NOME', '#CARGO', '#IDENTIFICAÇÃO');
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    
    return database.executar(instrucao);
}

function cadastrarMachine(fkEmpresa, codigoPatrimonio, cpu, ram, disco, so) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarMachine():", fkEmpresa, codigoPatrimonio);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
    insert into maquina values (${fkEmpresa}, null, 'sim', '${codigoPatrimonio}','${cpu}', '${ram}', '${disco}', '${so}');
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    
    return database.executar(instrucao);
}


function verifyEmail(email) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
       SELECT * FROM usuario_suporte WHERE email_usuario_suporte = '${email}';
    `;
    console.log("Executando a instrução SQL: " + instrucao);
    
    return database.executar(instrucao);
}

function cadastrarEmpresa(nome, cnpj, cep, bairro, logradouro, cidade) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa()");
    var instrucao = `
    insert into empresa values ('${nome}', '${cnpj}', '${cep}', '${bairro}', '${logradouro}', '${cidade}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deleteHistoricoMaquinas(fk_maquina) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa()");
    var instrucao = `
    DELETE FROM historico_maquina WHERE fk_maquina = ${fk_maquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deleteMaquinas(id_maquina) {

    deleteHistoricoMaquinas(id_maquina);

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa()");
    var instrucao = `
    DELETE FROM maquina WHERE id_maquina = ${id_maquina};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function deleteSuporte(id_suporte) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmpresa()");
    var instrucao = `
    DELETE FROM usuario_suporte WHERE id_usuario_suporte = ${id_suporte};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}



function alterarMachine(idMachine, sistema, status) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarEmpresa()");
    var instrucao = `
    UPDATE maquina SET sistema_operacional = '${sistema}', isActive = '${status}' WHERE id_maquina = ${idMachine};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
} 


function alterarStatus(isActive, id_maquina) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ");
    var instrucao = `
        UPDATE maquina SET isActive = 'nao' WHERE id_maquina = '${id_maquina}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    entrar,
    entrarGoogle,
    cadastrar,
    cadastrarUser,
    verifyEmail,
    cadastrarEmpresa,
    listarMaquinas,
    listarSuporte,
    deleteMaquinas,
    deleteHistoricoMaquinas,
    cadastrarMachine,
    alterarMachine,
    deleteSuporte,
    alterarStatus
};
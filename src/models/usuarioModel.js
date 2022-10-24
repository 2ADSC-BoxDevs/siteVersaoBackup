var database = require("../database/config")

function listar(req, res) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nome_usuario_maquina FROM usuario_maquina;
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

function cadastrar(fk_gestor, cargo, nome, email, senha, sub) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
       insert into usuario_suporte (fk_empresa, fk_gestor, cargo_usuario_suporte, nome_usuario_suporte, email_usuario_suporte, senha_usuario_suporte, sub_usuario_suporte) values (1, ${fk_gestor}, '${cargo}', '${nome}', '${email}', '${senha}', '${sub}');
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
    insert into empresa (nome_empresa, cnpj, cep, bairro, logradouro, cidade) values ('${nome}', '${cnpj}', '${cep}', '${bairro}', '${logradouro}', '${cidade}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listar,
    entrar,
    entrarGoogle,
    cadastrar,
    verifyEmail,
    cadastrarEmpresa
};
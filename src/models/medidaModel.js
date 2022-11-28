var database = require("../database/config");

function buscarTodasMedidas(idEmpresa) {
    instrucaoSql = ` SELECT m.id_maquina, m.isActive, h.processador_emUso,  h.memoriaRam_emUso, h.discoEmUso  FROM maquina as m
    LEFT JOIN historico_maquina as h
    ON h.fk_maquina = m.id_maquina WHERE m.fk_empresa = ${idEmpresa};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTodas(idEmpresa) {
    instrucaoSql = `SELECT TOP 1 maquina.*, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE fk_empresa = ${idEmpresa} ORDER BY historico_maquina.id_historico DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
   
}

function buscarUltimasMedidas(idEmpresa) {
    instrucaoSql = `SELECT TOP 5 maquina.*, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE fk_empresa = ${idEmpresa} ORDER BY historico_maquina.id_historico DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUnicaMedidas(idMaquina) {
    instrucaoSql = `SELECT TOP 5 maquina.id_maquina, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE id_maquina = ${idMaquina} ORDER BY historico_maquina.id_historico DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {
    instrucaoSql = `SELECT TOP 1 maquina.*, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE id_maquina = ${idMaquina} ORDER BY historico_maquina.id_historico DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
   
}

function verifyMachines(idEmpresa){

    instrucaoSql = ` SELECT m.*, u.* FROM maquina as m
    JOIN usuario_maquina as u
    ON m.fk_usuario_maquina = u.id_usuario_maquina where m.fk_empresa = ${idEmpresa};`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

function OnMachines(idEmpresa){

    instrucaoSql = `SELECT maquina.*, usuario_maquina.nome_usuario_maquina
    FROM maquina
    left join usuario_maquina
    ON maquina.fk_usuario_maquina=usuario_maquina.id_usuario_maquina WHERE maquina.fk_empresa = ${idEmpresa};`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarTodasMedidas,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    verifyMachines,
    OnMachines,
    buscarUnicaMedidas
}
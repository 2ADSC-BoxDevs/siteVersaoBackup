var database = require("../database/config");


function buscarUltimasMedidas(idEmpresa) {
    instrucaoSql = `SELECT TOP 5 maquina.*, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE fk_empresa = ${idEmpresa} ORDER BY historico_maquina.id_historico DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idEmpresa) {
    instrucaoSql = `SELECT TOP 1 maquina.*, historico_maquina.* FROM maquina JOIN historico_maquina ON historico_maquina.fk_maquina=maquina.id_maquina WHERE fk_empresa = ${idEmpresa} ORDER BY historico_maquina.id_historico DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
   
}

function verifyMachines(idEmpresa){

    instrucaoSql = `SELECT * FROM maquina WHERE fk_empresa = ${idEmpresa}`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

function OnMachines(idEmpresa){

    instrucaoSql = ` SELECT * FROM maquina WHERE fk_empresa = ${idEmpresa} and isActivade = "sim";`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    verifyMachines,
    OnMachines
}
var database = require("../database/config");


function buscarUltimasMedidas(idEmpresa) {
    instrucaoSql = `select m.*, h.*
    from maquina as m
     join historico_maquina as h
    on h.fk_maquina=m.id_maquina where m.fk_empresa = ${idEmpresa} order by h.id_historico desc limit 5;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idEmpresa) {

        instrucaoSql = `select m.*, h.*
        from maquina as m
         join historico_maquina as h
        on h.fk_maquina=m.id_maquina where m.fk_empresa = ${idEmpresa} order by h.id_historico desc limit 1;`;

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
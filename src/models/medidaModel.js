var database = require("../database/config");


function buscarUltimasMedidas(idEmpresa) {
    instrucaoSql = `select m.*, h.*
    from maquina as m
    right join historico_maquina as h
    on h.fk_maquina=m.id_maquina where m.fk_empresa = ${idEmpresa} order by h.id_historico desc limit 5;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idEmpresa) {

        instrucaoSql = `select m.*, h.*
        from maquina as m
        right join historico_maquina as h
        on h.fk_maquina=m.id_maquina where m.fk_empresa = ${idEmpresa} order by h.id_historico desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
   
}

function verifyMachines(){

    instrucaoSql = `SELECT * FROM maquina`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

function OnMachines(id){

    instrucaoSql = `SELECT isActivade FROM maquina WHERE id_maquina = ${id};`;

    console.log("Executando esse select " + instrucaoSql)

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    verifyMachines,
    OnMachines
}
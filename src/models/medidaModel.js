var database = require("../database/config");


function buscarUltimasMedidas(idAquario,) {
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador group by fk_jogador;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

var buscar = 1

function buscarMedidasEmTempoReal(idAquario) {

    if ( buscar <= 13) {
    
    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador where fk_jogador = ${buscar};`;

    buscar +=1


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

   } else if (buscar >= 14) {

    instrucaoSql = `select jogadores.nomeJogador, COUNT(usuarios.fk_jogador) as 'Favorito'
    from usuarios
    inner join jogadores
    on usuarios.fk_jogador = jogadores.idJogador where fk_jogador = ${buscar};`;

     buscar = 1

   }
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
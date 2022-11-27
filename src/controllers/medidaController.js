// const { request } = require("http");
var medidaModel = require("../models/medidaModel");



function buscarTodasMedidas(req, res) {
    console.log("entrei ")
    var idEmpresa = req.params.idEmpresa;

    medidaModel.buscarTodasMedidas(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealTodas(req, res) {

    var idEmpresa = req.params.idEmpresa;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealTodas(idEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





function buscarUltimasMedidas(req, res) {
    console.log("entrei ")
    var idEmpresa = req.params.idEmpresa;

    medidaModel.buscarUltimasMedidas(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idEmpresa = req.params.idEmpresa;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function verifyMachines (req, res){

    var idEmpresa = req.params.idEmpresa;

    medidaModel.OnMachines(idEmpresa)
    .then(function (resultado) {

        if(resultado.length > 0){

            res.status(200).json(resultado);

        } else {

            res.status(204).send("Nenhum computador foi encontrado!");

        }
    }).catch(function (erro) {

        console.log(erro)

        res.status(500).json(erro.sqlMessage);

    })


}

function OnMachines (req, res){

    var idEmpresa = req.params.idEmpresa;

    var id = req.body.idMachine

    medidaModel.OnMachines(id)
    .then(function (resultado) {

        if(resultado.length > 0){

            res.status(200).json(resultado);

        } else {

            res.status(204).send("Nenhum computador foi encontrado!");

        }
    }).catch(function (erro) {

        console.log(erro)

        res.status(500).json(erro.sqlMessage);

    })


}



module.exports = {
    buscarTodasMedidas,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    verifyMachines,
    OnMachines

}
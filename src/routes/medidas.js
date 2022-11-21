var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkEmpresaServer", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/verify", function (req, res) {
    medidaController.verifyMachines(req,res);
})

router.post("/OnMachines", function (req, res) {
    medidaController.OnMachines(req,res);
})

module.exports = router;
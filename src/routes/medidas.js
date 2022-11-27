var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/todas/:idEmpresa", function (req, res) {
    medidaController.buscarTodasMedidas(req, res);
});


router.get("/tempo-realTodas/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimas/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});


router.get("/tempo-realTemperatura/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/verify/:idEmpresa", function (req, res) {
    medidaController.verifyMachines(req,res);
})

router.post("/OnMachines/:idEmpresa", function (req, res) {
    medidaController.OnMachines(req,res);
})

module.exports = router;
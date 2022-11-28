var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");



router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
});

router.post("/verifyEmail", function (req, res) {
    usuarioController.verifyEmail(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/autenticarGoogle", function (req, res) {
    usuarioController.entrarGoogle(req, res);
});




// ------------------------------------------CRUDS----------------------------------------------






// -----------------------------------USUARIOS - MAQUINA----------------------------------------


router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);


});

// Pendente
router.post("/cadastrarUser", function (req, res) {
    usuarioController.cadastrarUser(req, res);
})


//-----------------------------------------------------------------------------------------------









// -----------------------------------USUARIOS - SUPORTE------------------------------------------


router.get("/listarSuporte", function (req, res) {
    usuarioController.listarSuporte(req, res);
});


router.delete("/deleteSuporte/:idSuporte", function (req, res) {
    usuarioController.deleteSuporte(req, res);
});


router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

//------------------------------------------------------------------------------------------------









// ---------------------------------------MAQUINA------------------------------------------------


router.get("/listarMaquinas", function (req, res) {
    usuarioController.listarMaquinas(req, res);
});

router.post("/cadastrarMachine", function (req, res) {
    usuarioController.cadastrarMachine(req, res);
})

router.delete("/DeletarMaquina/:idMaquina", function (req, res) {
    usuarioController.deleteMaquinas(req, res);
})

router.put("/alterarMachine", function (req, res) {
    usuarioController.alterarMachine(req, res);
})

router.put("/alterarStatus/:id_maquina", function (req, res) {
    usuarioController.alterarStatus(req, res);
});

//------------------------------------------------------------------------------------------------








// ---------------------------------------CRUD - FIM----------------------------------------------



//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

module.exports = router;
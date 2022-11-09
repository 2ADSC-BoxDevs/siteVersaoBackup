var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {

    console.log("Estou na usuarioController");

    res.json(" ESTAMOS FUNCIONANDO ");
}

function listar(req, res) {

    usuarioModel.listar()

        .then(function (resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado);

            } else {

                res.status(204).send("Nenhum resultado encontrado!")

            }
        }).catch(

            function (erro) {

                console.log(erro);

                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);

                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

// Tratamento da variavel no Back-end

    if (email == undefined) {

        res.status(400).send("Seu email está undefined!");

    } else if (senha == undefined) {

        res.status(400).send("Sua senha está indefinida!");

    } else {
        
        usuarioModel.entrar(email, senha)
            .then(function (resultado) {

                    console.log(`Resultados encontrados: ${resultado.length}`);

                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {

                        console.log(resultado);

                        res.json(resultado[0]);

                    } else if (resultado.length == 0) {

                        res.status(403).send("Email e/ou senha inválido(s)");

                    } else {

                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {

                    console.log(erro);

                    console.log("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);

                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function entrarGoogle(req, res) {
    
    var email = req.body.emailServer;
    var sub = req.body.subServer;

// Tratamento da variavel no Back-end

    if (email == undefined) {

        res.status(400).send("Seu email está undefined!");

    } else if (sub == undefined) {

        res.status(400).send("Sua senha está indefinida!");

    } else {
        
        usuarioModel.entrarGoogle(email, sub)
            .then(function (resultado) {

                    console.log(`Resultados encontrados: ${resultado.length}`);

                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {

                        console.log(resultado);

                        res.json(resultado[0]);

                    } else if (resultado.length == 0) {

                        res.status(403).send("Email e/ou senha inválido(s)");

                    } else {

                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {

                    console.log(erro);

                    console.log("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);

                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cargo = req.body.cargoServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fk_gestor = req.body.fk_gestorServer;
    var sub = req.body.subServer

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(fk_gestor, cargo, nome, email, senha, sub)
            .then(function (resultado) {

                    res.json(resultado);
                }

            ).catch(function (erro) {

                    console.log(erro);
                    console.log("Houve um erro ao realizar o cadastro! Erro: ",erro.sqlMessage);

                    res.status(500).json(erro.sqlMessage);
                }
            );
    // }
}

function verifyEmail(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verifyEmail(email)
            .then(function (resultado) {

                    res.json(resultado);
                }

            ).catch(function (erro) {

                    console.log(erro);
                    console.log("Houve um erro ao realizar o cadastro! Erro: ",erro.sqlMessage);

                    res.status(500).json(erro.sqlMessage);
                }
            );
    // }
}


function cadastrarEmpresa(req, res) {

    var nome = req.body.nomeEmpServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;                
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;

    usuarioModel.cadastrarEmpresa(nome, cnpj, cep, bairro, logradouro, cidade)

        .then(function (resultado) {

            // if (resultado.length > 0) {

                res.status(200).json(resultado);

            // } else {

            //     res.status(204).send("Nenhum resultado encontrado!")
            // }
        }).catch(function (erro) {

                console.log(erro);

                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    entrarGoogle,
    cadastrar,
    verifyEmail,
    listar,
    testar,
    cadastrarEmpresa
}
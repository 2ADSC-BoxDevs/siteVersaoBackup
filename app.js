// -------------------DEFINIÇÂO DE AMBIENTES--------------------------

 // process.env.AMBIENTE_PROCESSO = "desenvolvimento";
  process.env.AMBIENTE_PROCESSO = "producao";



// -------------------REQUISIÇÔES--------------------------------------

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

// ------------------SUB-REQUISIÇÔES-----------------------------------

var app = express();
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");


// ------------------MIDDLEWARER----------------------------------------


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pasta que guarda as views. Define o caminho principal, o inicio de toda rota começa por "Public"
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use(express.static('public'))


// ------------------ROTAS-PADRÕES--------------------------------------

app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter)
app.use("/", indexRouter);

// ---------------PORTA DO NAVEGADOR------------------------------------

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});

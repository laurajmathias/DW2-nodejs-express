// Importando o Express
//const express = require("express")

import express from 'express';
// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
//Cponfigurações do Express: 
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

import ClienteController from "./controllers/ClienteController.js"
import PedidoController from "./controllers/PedidoController.js"
import ProdutoController from "./controllers/ProdutoController.js"
import connection from "./Config/sequelize-config.js"

//Realizando a conexão com o banco: 
//THEN - Sucesso da promessa! 
connection.authenticate().then(() => {
    console.log("Conexão do banco de dados realizada com sucesso!"); 
}).catch((error) => {
    console.log("Ocorreu um eror inesperado ao se conectar ao banco de dados. Erro: "`${error}`)
})

//CATCH - Falha da promessa! 

app.use('/', ClienteController);
app.use('/', PedidoController);
app.use('/', ProdutoController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


//npm install mysql2 - biblioteca driver de conexão com o banco 




// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})
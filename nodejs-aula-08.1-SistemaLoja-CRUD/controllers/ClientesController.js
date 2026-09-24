
// ROTA CLIENTES


import express from "express";
import Cliente from "../models/Cliente.js";


const rota = express.Router();


// Rota de listagem de clientes
rota.get("/clientes", function (req, res) {
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes,
        });
    }).catch(error => {
        console.log("Ocorreu um erro ao listar os clientes: " + error);
    });
});


// ROTA DE CADASTRO DE CLIENTES (Alterado para POST)
rota.post("/clientes/cadastrar", (req, res) => {
    // Capturando os dados vindos do formulário e gravando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;


    // Chamando o model para gravar os dados no banco:
    Cliente.create({
        nome: nome,
        cpf: cpf,
        endereco: endereco,
    }).then(() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});


export default rota;



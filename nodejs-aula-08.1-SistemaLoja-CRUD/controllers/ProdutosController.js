
// ROTA PRODUTOS

import express from "express";
import Produto from "../models/Produto.js";

const rota = express.Router();

// Rota de produtos
rota.get("/produtos", function (req, res) {

    Produto.findAll().then(produtos => {

        res.render("produtos", {
            produtos: produtos,
        });

    });

});

export default rota;

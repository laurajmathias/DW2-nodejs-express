// ROTA CLIENTES

import express from "express";
import Cliente from "../models/Cliente.js";

const rota = express.Router();

// Rota de clientes
rota.get("/clientes", function (req, res) {

    Cliente.findAll().then(clientes => {

        res.render("clientes", {
            clientes: clientes,
        });

    });

});

export default rota;
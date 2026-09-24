// ROTA PEDIDOS: 

import express from "express";
import Pedido from "../models/Pedido.js";

const rota = express.Router();

// Rota de pedidos
rota.get("/pedidos", function (req, res) {

    Pedido.findAll().then(pedidos => {

        res.render("pedidos", {
            pedidos: pedidos,
        });

    });

});

export default rota;

// Model Produto

// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca do Sequelize
import Sequelize from "sequelize";

// Usando o método define
const Produto = connection.define("produtos", {

    nome: {
        type: Sequelize.STRING,
    },

    preco: {
        type: Sequelize.FLOAT,
    },

    categoria: {
        type: Sequelize.STRING,
    },

});
 Produto.sync({force: false}); 
export default Produto;

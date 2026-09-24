//Pedidos: 

//Importando o arquivo de conexão 
import connection from "../config/sequelize-config.js";

//importando a biblioteca do sequelize 
import  Sequelize  from "sequelize";

const Pedido = connection.define( "pedidos", {
    //Atributos: 
    numero: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
    }, 

    valor: {
        type: Sequelize.FLOAT, 
        allowNull: false, 
    }, 
}); 

Pedido.sync({ force: false}); 

export default Pedido; 
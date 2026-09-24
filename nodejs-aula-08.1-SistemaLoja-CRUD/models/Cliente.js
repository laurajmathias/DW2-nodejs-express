// Model Cliente

// Um model é uma representação de uma entidade do sistema (tabela)

// Importando o arquivo de conexão:
import connection from "../config/sequelize-config.js";

// Importando a biblioteca sequelize
import Sequelize from "sequelize";

// O método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {

    // Atributos dentro do objeto {} dentro da tabela clientes!!
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },

    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados:
// force: false -> não apaga a tabela existente
Cliente.sync({ force: false });

// Exportando o módulo:
export default Cliente;
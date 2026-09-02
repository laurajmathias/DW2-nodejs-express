// arquivo principal do backend


//AQUI IRÃO AS ROTAS DO SITE 
//ROTA PRINCIPAL 
// .get() -> Cria uma rota da aplicação 
app.get("/", (req, res) => {
    res.send("Oi, bem vindo! =)")
}); 

// IMPORTANDO O EXPRESS PARA O PROJETO: 
const express = require("express") // - Forma clássica (CommomJS Modules); 
const app = express(); // Criando uma instancia do express, pega op express e carrega na variável app. 

// Método do Express para iniciar o servidor back-end: 
//app.listen()

// Iniciando o servidor na porta 8080: 
const port = 8080; 
app.listen(port, (error) => {
    // Tratando erros de inicialização: 
    if (error) {
        // Verifica se erro tem algum valor = true. 
        console.log(`Ocorreu um erro ao iniciar o servidor.  Erro:  ${error}`); 
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`); 
    }


});
 




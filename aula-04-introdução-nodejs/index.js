// arquivo principal do backend

// Configurando o EJS: 
app.set('view engine', 'ejs') // rendereiza as páginas do site 

//AQUI IRÃO AS ROTAS DO SITE 
//ROTA PRINCIPAL 
// .get() -> Cria uma rota da aplicação 

// Exercícios de rota - 
// 1. Criar as seguintes rotas no site: 
// /serviços, /clientes, /perfil 


app.get("/", (req, res) => {
    res.render('index')
}); 

//|rota de produtos: 
app.get("Produtos", (req, res) => {
    res.render('/produtos')
}); //localhost8080/produtos

app.get("Servicos", (req, res) => {
    res.render('/servicos')
} ); 

app.get("Clientes", (req, res) => {
    res.render('/clientes')
}); 

app.get("Perfil", (re1, res) => {
    res.render('/perfil')
}); 

// 2 - Criar páginas EJS para cada uma. 
// 3 - Incluir todfas as rotas no menu principal 
// 4 - incluir botão de voltar em todas as páginas

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
 

//nodemon - biblioteca para inciar o servidor automático: 
// terminal = npm install nodemon; 

//para configurar essa biblioteca -> abre o package.json -> vai estar em dependencies -> cria o script pro projeto 

// ao final do script test, põe uma virgula, desce uma linha e escreve: 
// "npx nodemon index.js" - entre as aspas mesmo 



// joga npm start no terminale  ele inicializa o servidor a cada modifição do código 
// o npx é usado para rodar/executar as bibliotecas; 

//Instalar biblioteca EJS para inicializar as páginas do site... npm install ejs 





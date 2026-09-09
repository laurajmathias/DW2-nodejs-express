// arquivo principal do backend

// IMPORTANDO O EXPRESS PARA O PROJETO: 

const express = require("express") // - Forma clássica (CommomJS Modules); 

const app = express(); // Criando uma instancia do express, pega o express e carrega na variável app. 

// Configurando o EJS: 

app.set('view engine', 'ejs') // renderiza as páginas do site 
//Configurando a pasta de arquivos estáticos - public:

app.use(express.static('public')) // pasta de arquivos estáticos (css, js, imagens)


// AQUI IRÃO AS ROTAS DO SITE 

// ROTA PRINCIPAL 

// .get() -> Cria uma rota da aplicação 

// Exercícios de rota - 

// 1. Criar as seguintes rotas no site: 

// /serviços, /clientes, /perfil 



app.get("/", (req, res) => {

    res.render('index')

}); 



// Rota de produtos: 

app.get("/Produtos", (req, res) => {

    // Lista de produtos (dados mockados)

    // Futuramente os dados virão do banco de dados

    // Array de objetos

    const produtos = [

        {nome: "Computador", marca: "Lenovo", preco: 3500}, 

        {nome: "Celular", marca: "Samsung", preco: 4100}, 

        {nome: "Notebook", marca: "Acer", preco: 5100}, 

        {nome: "Tablet", marca: "Asus", preco: 2400},  

    ];

    res.render("produtos", {

        // Enviando a lista de produtos para a página: 

        produtos: produtos, 

    }); 

}); // localhost:8080/Produtos



app.get("/Servicos", (req, res) => {

    res.render('servicos')

}); 



app.get("/Clientes", (req, res) => {

    const clientes =

    [

        {nome: "Diego Max", cpf: "999.999.999-99"}, 

        {nome: "Gregory Sopuza", cpf: "999.999.999-99"}, 

        {nome: "Laura Júlia", cpf: "999.999.999-99"}, 

        {nome: "Mario Armando", cpf: "999.999.999-9"}, 

    ]; 

    res.render('clientes', {

        clientes: clientes

    })

}); 



app.get("/Perfil", (req, res) => {

    res.render('perfil')

}); 



// 2 - Criar páginas EJS para cada uma. 

// 3 - Incluir todas as rotas no menu principal 

// 4 - Incluir botão de voltar em todas as páginas



// Método do Express para iniciar o servidor back-end: 

// app.listen()



// Iniciando o servidor na porta 8080: 

const port = 8080; 

app.listen(port, (error) => {

    // Tratando erros de inicialização: 

    if (error) {

        // Verifica se erro tem algum valor = true. 

        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`); 

    } else {

        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`); 

    }

});



// nodemon - biblioteca para iniciar o servidor automático: 

// terminal = npm install nodemon; 

// para configurar essa biblioteca -> abre o package.json -> vai estar em dependencies -> cria o script pro projeto 

// ao final do script test, põe uma virgula, desce uma linha e escreve: 

// "npx nodemon index.js" - entre as aspas mesmo 



// joga npm start no terminal e ele inicializa o servidor a cada modificação do código 

// o npx é usado para rodar/executar as bibliotecas; 

// Instalar biblioteca EJS para inicializar as páginas do site... npm install ejs
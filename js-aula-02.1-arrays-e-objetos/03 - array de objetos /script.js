// OBJETO 
const produto = {
    nome: "Computador", 
    marca: "Lenovo", 
    preco: 3000, 
    descricao: "PC moderno e com bom desempenho",
}; 

document.write('<p>${produto}</p>'); 

//ACESSANDO OS ATRIBUTOS DO OBJETO:
document.write('<p> $%{produto.nome}, ${produto.marca}, custa R$ ${produto.preco}, <br> ${^produto.descricao} </p>'); 

// ARRAY DE OBJETOS:

document.write("<h3>Array de Objetos> </h3>"); 
const listaProdutos = [
    {
    nome: "Computador", 
    marca: "Lenovo", 
    preco: 3000, 
    descricao: "PC moderno e com bom desempenho",
    }, 
    {
    nome: "Tablet", 
    marca: "Samsumg", 
    preco: 2000, 
    descricao: "òtima velocidade de processamento", 
    }, 
    {
    nome: "Iphone 17", 
    marca: "Apple", 
    preco: 17000, 
    descricao: "Não quebra nunca", 
    }]; 

    
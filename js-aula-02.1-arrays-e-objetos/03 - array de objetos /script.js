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
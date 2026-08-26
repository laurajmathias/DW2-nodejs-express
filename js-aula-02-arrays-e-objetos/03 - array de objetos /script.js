// OBJETO 
const produto = {
    nome: "Computador", 
    marca: "Lenovo", 
    preco: 3000, 
    descricao: "PC moderno e com bom desempenho",
}; 

// ACESSANDO OS ATRIBUTOS DO OBJETO:
// Corrigido: removido o % e o ^
document.write(`<p> ${produto.nome}, ${produto.marca}, custa R$ ${produto.preco}, <br> ${produto.descricao} </p>`); 

// ARRAY DE OBJETOS:
document.write("<h3>Array de Objetos</h3>"); // Corrigido o '>' extra

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
        descricao: "Ótima velocidade de processamento", 
    }, 
    {
        nome: "Iphone 17", 
        marca: "Apple", 
        preco: 17000, 
        descricao: "Ultra resistente! Não quebra nunca!", 
    }
]; 

// EXIBINDO AS INFORMAÇÕES DOS PRODUTOS COM FOREACH: 
document.write('<h4> Produtos em promoção:</h4>');

listaProdutos.forEach(produto => {
    // Corrigido: agora exibe os dados do produto ao invés de repetir o título
    document.write(`
        <p><b>Nome:</b> ${produto.nome} <br>
        <b>Marca:</b> ${produto.marca} <br>
        <b>Preço:</b> R$ ${produto.preco}</p>
        <hr>
    `);
});
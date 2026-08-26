document.write("<h3>Maniopulando datas: </h3>"); 

//Para coemçar a manipular data no Javascript, é necessário criar uma instãncia de uma classe nativa do JavaScript - DATE 

const dataAtual = new Date(); 


document.write(dataAtual); 

// Pegando só o dia atual: 
const dia = dataAtual.getDate(); 
document.write(`<p> Hoje é dia: ${dia}. </p>`); 

// Pegando só o mês atual: 
const mes = dataAtual.getMonth() + 1; 
document.write(`<p> Estamos no mês: ${mes}. </p>`); 


// Pegando só o ano atual: 
const ano = dataAtual.getFullYear(); 
document.write(`<p> Estamos no ano: ${ano}. </p>`); 

//Exibindo a data completa: 
document.write(`Data de hoje: ${dia}/${mes}/${ano}.`);







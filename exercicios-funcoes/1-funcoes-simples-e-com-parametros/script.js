  // FUNÇÃO SIMPLES

function showMessage() {
  const message = "<h2> Olá, bem vindo!</h2>";
  document.write(message);
}

// Invocando a Função

showMessage();

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
const user = "Laura Julia";

// ESSA FUNÇÃO RECEBE UM PARÂMETRO
function userMessage(user) {
  document.write(`<h3> O que deseja fazer hoje, ${user}? </h3>`);
}

// INICIANDO A FUNÇÃO USANDO UM ARGUMRNTO (INFORMAÇÕES QUE VOCÊ ESTÁ PASSANDO PARA A FUNÇÃO) - PASSA = ARGUMENTO, RECEBE = PARÂMETRO;

userMessage(user);

// FUNÇÃO COM MAIS DE UM PARÂMETRO: 

const n1 = 10; 
const n2 = 5; 

function soma(n1, n2) {
    let resultado = n1 + n2; 
    document.write(`A soma de ${n1} + ${n2} é igual a: ${resultado}.`); 
}

soma(n1, n2); 

// FUNÇÃO ANÔNIMA: 


const mult = function (x) {
    return x * 2;
}
// Atribuição de valor: 
const x = 15; 

// COMO INVOCAR A FUNÇÃO SEM NOME? 

document.write(`<p> O resultado da multipliação é: ${mult(x)} </p>`); 

//FUNÇÃO SETA - ARROW FUNCTION 
const triplo = (y) => {

    return y * 3; 
}

// Atribuindo o valor: 

const y = 100; 
document.write (`<p> O triplo de y é de ${y} é: ${triplo(y)} `); 

// FUNÇÃO SETA - COM MAIS DE UM PARÂMETRO - ARROW FUNCTION: 

const calculadora = (num1, operador, num2) => {
    // EVAL NO JAVASCRIPT É UMA FUNÇÃO NATIVA QUE JÁ REALIZA CÁLCULOS MATEMÁTICOS A PARTIR DE DOIS NÚMEROS E UM OPERADOR. 
    return eval(`${num1} ${operador} ${num2}`); 
}



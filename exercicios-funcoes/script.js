//EXERCICIO 1) Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de chamar a função no final) 

document.write(`<h3> Exercicio 1)</h3>`);


function mostrarDados() {
   document.write(`<p>nome: Laura</p>`); 
   document.write(`<p>idade: 18 anos</p>`); 
   document.write(`<p>cidade: Sete Barras</p>`); 
}

mostrarDados(); 

//EXERCICO 2)  Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.


document.write(`<h3>Exercicio 2</h3>`); 

const n1 = 10; 
const n2 = 5; 

function divisão(n1, n2) {
    let resultado = n1 / n2; 
    document.write(`A divisão de ${n1} / ${n2} é igual a: ${resultado}.`); 
}

divisão(n1, n2); 

//  EXERCICIO 3 - 

    document.write(`<h3>Exercicio 3</h3>`); 

    const num1Ex3 = 7; 
    const num2Ex3 = 45; 
    const num3Ex3 = 2; 


    function multiplicar (n1, n2, n3) {
        return n1 * n2 * n3; 
    }

    document.write(`<p> O resultado da mulplicação de ${num1Ex3} por ${num2Ex3} por ${num3Ex3} é igual a: <strong> ${multiplicar(num1Ex3, num2Ex3, num3Ex3)}</strong></p>`)

// EXERCÍCIO 4 - 

document.write(`<h3>Exercício 4 </h3>`); 

const idade = 19; 

function maiorIdade(idade) { 

    if (idade >= 18) {
        return "Maior de idade"; 
    } else {
        return "Menor de idade"; 
    }
} 

document.write(`<p>O usuário tem ${idade} e, portanto, é <strong>${maiorIdade(idade)}</strong></p>`); 



// EXERCÍCIO 5 - 


document.write(`<h3>Exercício 5</h3>`); 

const nota1 = 8; 
const nota2 = 7;

const media = function (nota1, nota2) {

 let resultado = (nota1 + nota2) /2; 

 if (resultado <=7) { 
    return "Reprovado"; 
 } else {
    return "Aprovado"; 
 }
}

document.write(`<p>A média do aluno é: ${media(nota1, nota2)}</p>`); 

//EXERCÍCIO 6 - 

document.write(`<h3>Exercício 6</h3>`); 



const triplo = (y) => {

    return y * 3; 
}

document.write("O triplo do número é " + triplo(10));

//EXERCÍCIO 7 - 

const soma = (num1, num2, num3, num4) => {

    return num1 + num2 + num3 + num4; 

}

const num1 = 8; 
const num2 = 7; 
const num3 = 6; 
const num4 = 5; 

document.write(`<p>O resultado da soma dos quatro números é de:  ${soma(num1, num2, num3, num4)}</p>`); 

//EXERCÍCIO 8 - 

(function (user) {

    console.log(`Olá, ${user}! Seja bem-vindo!`);

})("Laura ");
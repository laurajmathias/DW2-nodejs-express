//EXERCICIO 1) Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de chamar a função no final) 

document.write(`<h3> Exercicio 1)</h3>`);


function mostrarDados() {
   document.write(`nome: Laura`); 
   document.write(`idade: 18 anos`); 
   document.write(`cidade: Sete Barras`); 
   
   mostrarDados(); 

}

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

    Document.write(`<h3>Exercicio 3</h3>`); 

    const n1 = 7; 
    const n2 = 45; 
    const n3 = 2; 

    document.write(`<p>Digite o primeiro número: </p>`);
    document.write(`<p> Digite o segundo úmero: </p> `); 
    document.write(`<p> Digite o terceiro número: </p>`)

    function multipliação (n1, n2, n3) {
        return n1 * n2 * n3; 
    }

    document.write(`<p> O resultado da mulplicação de ${n1} por ${n2} por ${n3} é igual a: <strong> ${multipliação(n1, n2, n3)}</strong></p>`)


    
function miltiplicar(n1, n2) {
  return n1 * n2; // * - Operador de muliplicação;
}

// EXIBINDO O RESULTADO:
document.write(
  `<p>A multipliação de ${n1} por ${n2}é igual a <strong>${multiplicar(n1, n2)} </strong></p>`,
);




    





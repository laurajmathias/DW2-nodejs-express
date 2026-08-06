// Funções com retorno:
const n1 = 50;
const n2 = 3;

// ESSA FUNÇÃO GERA UM RESULTADO E EXPORTA

function miltiplicar(n1, n2) {
  return n1 * n2; // * - Operador de muliplicação;
}

// EXIBINDO O RESULTADO:
document.write(
  `<p>A multipliação de ${n1} por ${n2}é igual a <strong>${multiplicar(n1, n2)} </strong></p>`,
);

//FUNCOES COM MAIS DE UM RETORNO:

const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.writeln(
  `<p> O número ${number} é <strong> ${parImpar(number)}</strong></p>`,
);

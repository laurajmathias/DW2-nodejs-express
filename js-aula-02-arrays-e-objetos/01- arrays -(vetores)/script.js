// VETORES NO JAVASCRIPT 

let produtos = [ "Computador", "Notebook", "Celular", "Tablet"] 

document.write('O tipo da variável que recebe um vetot no Javascript é: <strong> ${typeof(produtos)} </strong>'); 

document.write('<br> <br> O tipo da variável aluno é: <strong> ${typeof(aluno)} </strong>'); 


//  ${typeof(produtos)}

document.write("Exibindo os itens do vetor pelo índice : <br>"); 

document.write('<p>${produtos[0]}</p>')
document.write('<p>${produtos[1]}</p>')
document.write('<p>${produtos[2]}</p>')
document.write('<p>${produtos[3]}</p>')




document.write("<br> Exibindo os itens do vetor através do <strong> forEach: </strong>"); 

produtos.forEach( produto => { 

    //Para cada "produto" da lista de "produtos", faça tal... 

    document.write('<p>${produtp} </p>')

})


document.write("<br>Exibindo os itens do vetor e os índices como  forEach: ")
produtos.forEach((produto, indice) => {
    document.write('<p> ${indice + 1} - ${produto} </p>'); 

})

// RECAP DA AULA: 

// 1) CRIAMOS UM VETOR, DEPOIS EXIBIMOS OS ITENS E INDICES DO VETOR... 










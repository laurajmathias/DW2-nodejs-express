// MÉTODOS DE MANIPULAÇÃO DE VETORES: 

let frutas = ['Laranja', 'Maçã', 'Banana']

document.write('<p> Os itens do nosso vetor são: ${frutas} </p>'); 

frutas[3] = 'Morango'; 

document.write('<p> Agora a lista é: ${frutas'); 

// MÉTODO PARA MANIPULAR VETOR - PUSH: INSERE UM NOVO ELEMENTO DNO FINAL DO VETOR: 

frutas.push('Abacaxi'); 
document.write('<p> Agora a lista é: ${frutas </p>'); 


// MÉTODO UNSHIFT - INSERE UM NOVO ELEMENTO NO ÍNICIO DO VETOR: 

    frutas.unshift('Pera'); 
    document.write('<p> Agora a lista é: ${frutas </p>'); 

    //MÉTODO LENGTH - RETORNA O NPUMEOR DE ELEMENTOS NO VETOR: 

    document.write('Na nossa lista temos: ${frutas.length} ftutas. '); 

    

    //MÉTODO SORT - ORDENA OS ITENS DO VETOR: 

    document.write('<p> o primeiro item da lista é: ${frutas[0]} </p>'); 


    let frutasOrdenadas = frutas.sort(); 

    document.write('<p> O primeiro item da lista é: ${frutasOrdenadas}</p>'); 


    document.write('<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>'); 
    

    // MÉTODO SORT 1.2 - ORDENANOD EM ORDEM CRESCENTE E DECRESCENTE: 

    let numeros = [6, 8, 2, 9, 3, 800, 200]; 
    document.write('Os números são: ${numeros}'); 
    document.write('<p>Os númerosordenados são: ${numeros.sort()}</p>                   '); 



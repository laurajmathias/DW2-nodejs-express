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

// ADICIONANDO DATAS, MESES E ANOS À DATA ATUAL: 
//Adicionando 4 dias à data atual: 
dataAtual.setDate(dataAtual.getDate() + 4); 

//Exibindo a nova data: 
document.write(`<p> Daqui a 4 dias será dia: ${dataAtual.getDate()}</p>`); 

//Adicionando 4 meses: 

dataAtual.setMonth(dataAtual.getDate() + 4); 
document.write(`<p> Daqui 4 meses será o mês: ${dataAtual.getMonth() + 1}</p>`);

//Adicionando 4 anos: 

dataAtual.setFullYear(dataAtual.getFullYear() + 4); 
document.write(`<p> Daqui 4 anos será: ${dataAtual.getFullYear}</p>`); 

//########################################################################################################################################

//FORMATAÇÃO DE NÚMEROS E MOEDAS 

// - NÚMEROS 
document.write("<h3> Manipulando Números e Moedas: </h3>"); 
const futuroSalario = 40000.3; 
document.write(`<p>${futuroSalario}</p>`); 
//Manipulando o número para mostrar mais casas decimais: 
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
//Para ocultar as casas decimais: 
document.write(`<p>${futuroSalario.toFixed(0)}</p>`); 

//Como conventer o identificador de casas decimais: 
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`); 

//FORMATANDO PARA REAL(R$):
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br", {
        style: "currency", 
        currency: "BRL"
    })}
    </p>`); 
    
    
//FORMATANDO PARA DÓLAR(USD):
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
        style: "currency", 
        currency: "USD"
    })}
    </p>`); 

    
//FORMATANDO PARA EURO(EUR):
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
        style: "currency", 
        currency: "EUR"
    })}
    </p>`); 

    
    
    


    
    















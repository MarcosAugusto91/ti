function calcular(){

let selecao = window.document.getElementById('dia');
let dia = Number(selecao.value);
let resposta = window.document.getElementById('resposta');

console.log(selecao.value);

switch (dia){
    case 0:
        resposta.innerHTML = '<strong>Hoje é Domingo!</strong>';
        resposta.style.color = 'blue';
        break;
    case 1:
        resposta.innerHTML = 'Hoje é Segunda-Feira!';
        resposta.style.color = 'red';
        break;
    case 2:
        resposta.innerHTML = 'Hoje é Terça-Feira!';
        resposta.style.color = 'red';
        break;
    case 3:
        resposta.innerHTML = 'Hoje é Quarta-Feira!';
        resposta.style.color = 'orange';
        break;
    case 4:
        resposta.innerHTML = 'Hoje é Quinta-Feira!';
        resposta.style.color = 'yellow';
        break;
    case 5:
        resposta.innerHTML = 'Hoje é Sexta-Feira!';
        resposta.style.color = 'green';
        break;
    case 6:
        resposta.innerHTML = 'Hoje é Sábado!';
        resposta.style.color = 'green';
        break;
    default:
        resposta.innerHTML ='Dia inválido selecionado!';
        break;
    }
}
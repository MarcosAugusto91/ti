function iniciar() {
    let nivel = window.document.getElementById('nivel');
    let valortentativa = window.document.getElementById('valortentativa');
    let formulario = window.document.getElementById('formnivel');
    let formjogo = window.document.getElementById('formjogo')
    let resultado = window.document.getElementById('resultado');
    let valornivel = Number(nivel.value);
    let maximo, tentativas;

    formulario.style.display = 'none';
    formjogo.style.display = 'flex';

    if (valornivel == 1){
        maximo = 10;
        tentativas = 3;
        valortentativa.setAttribute('max',`${maximo}`)
    } else if (valornivel == 2) {
        maximo = 100;
        tentativas = 10;
        valortentativa.setAttribute('max',`${maximo}`)
        valortentativa.style.width = '60px';
    } else if (valornivel == 3) {
        maximo = 1000;
        tentativas = 15;
        valortentativa.setAttribute('max',`${maximo}`);      
        valortentativa.style.width = '70px';
    } else {
        resultado.innerHTML = "Digite um valor válido (1 à 3)!"
     }

    resultado.innerHTML = `Máximo: ${maximo} - Tentativas: ${tentativas}`;
}
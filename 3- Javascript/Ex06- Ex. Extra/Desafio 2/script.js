function iniciar() {
    let nivel = window.document.getElementById('nivel');
    let formulario = window.document.getElementById('formulario');
    let formjogo = window.document.getElementById('jogo')
    let resultado = window.document.getElementById('resultado');
    let valornivel = Number(nivel.value);

    formulario.style.display = 'none';
    formjogo.style.display = 'flex';
    resultado.innerHTML = '';
}



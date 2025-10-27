let nivel, valortentativa, formulario, formjogo, resultado, valornivel, maximo, tentativas, numeroAleatorio;

let contador = 1;

nivel = window.document.getElementById('nivel');
btniniciar = window.document.getElementById('btniniciar');
nivel.focus();

valortentativa = window.document.getElementById('valortentativa');
btnjogar = window.document.getElementById('btnconfirmar');

nivel.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // evita comportamento padrão
        btniniciar.click(); // simula clique no botão
    }
});

valortentativa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // evita comportamento padrão
        btnjogar.click(); // simula clique no botão
    }
});


//---------------------------------- Inicia o jogo
function iniciar() {
    formulario = window.document.getElementById('formnivel');
    formjogo = window.document.getElementById('formjogo')
    resultado = window.document.getElementById('resultado');
    valornivel = Number(nivel.value);

    if (valornivel == 1) {
        maximo = 10;
        tentativas = 3;
        valortentativa.setAttribute('max', `${maximo}`)
    } else if (valornivel == 2) {
        maximo = 100;
        tentativas = 10;
        valortentativa.setAttribute('max', `${maximo}`)
        valortentativa.style.width = '60px';
    } else if (valornivel == 3) {
        maximo = 1000;
        tentativas = 15;
        valortentativa.setAttribute('max', `${maximo}`);
        valortentativa.style.width = '70px';
    } else {
        resultado.innerHTML = "Digite um valor válido (1 à 3)!"
        nivel.value = '';
        return;
    }

    formulario.style.display = 'none';
    formjogo.style.display = 'flex';
    resultado.innerHTML = `Você tem ${tentativas} tentativas para acertar o número entre 1 e ${maximo}. Boa sorte!`;
    valortentativa.focus();

    if (valornivel == 1) {
        // Gera um número aleatório entre 1 e 10
        numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    } else if (valornivel == 2) {  
        // Gera um número aleatório entre 1 e 100
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;      
    } else if (valornivel == 3) {
        // Gera um número aleatório entre 1 e 1000
        numeroAleatorio = Math.floor(Math.random() * 1000) + 1;     
    }
}

    //-----------------------------------Função jogar

    function jogar() {

        valortentativa = window.document.getElementById('valortentativa');
        let valorjogado = Number(valortentativa.value);

        switch (valornivel) {
            case 1:
                // Validando o valor jogado
                if (valorjogado < 1 || valorjogado > 10) {
                    alert("Digite um valor válido entre 1 e 10!");
                    return;
                }
                // Verificando se o usuário acertou
                else if (valorjogado === numeroAleatorio) {
                    resultado.innerHTML = `Parabéns! Você acertou com ${contador} tentativas!`;
                    btnjogar.value = "Jogar Novamente";
                    btnjogar.onclick = function () { location.reload() };
                    btnjogar.style.width = '120px';
                    return;
                }
                else {
                    // Dando dica ao usuário
                    if (valorjogado < numeroAleatorio) {
                        resultado.innerHTML = "Você errou! Dica: O número é maior!";
                    } else {
                        resultado.innerHTML = "Você errou! Dica: O número é menor!";
                    }
                    // Verificando tentativas restantes
                    if (tentativas === 1) {
                        resultado.innerHTML = `Suas tentativas acabaram! O número era ${numeroAleatorio}.`;
                        btnjogar.value = "Jogar Novamente";
                        btnjogar.onclick = function () { location.reload() };
                        btnjogar.style.width = '120px';
                        btnjogar.focus();
                        return;
                    }

                    // Reduzindo tentativas
                    tentativas--;
                    btnjogar.value = `${contador + 1}º Tentativa`;
                    contador++;
                    valortentativa.value = '';
                    valortentativa.focus();
                }
                break;

            case 2:
                // Validando o valor jogado
                if (valorjogado < 1 || valorjogado > 100) {
                    alert("Digite um valor válido entre 1 e 10!");
                    return;
                }
                // Verificando se o usuário acertou
                else if (valorjogado === numeroAleatorio) {
                    resultado.innerHTML = `Parabéns! Você acertou com ${contador} tentativas!`;
                    btnjogar.value = "Jogar Novamente";
                    btnjogar.onclick = function () { location.reload() };
                    btnjogar.style.width = '120px';
                    return;
                }
                else {
                    // Dando dica ao usuário
                    if (valorjogado < numeroAleatorio) {
                        resultado.innerHTML = "Você errou! Dica: O número é maior!";
                    } else {
                        resultado.innerHTML = "Você errou! Dica: O número é menor!";
                    }
                    // Verificando tentativas restantes
                    if (tentativas === 1) {
                        resultado.innerHTML = `Suas tentativas acabaram! O número era ${numeroAleatorio}.`;
                        btnjogar.value = "Jogar Novamente";
                        btnjogar.onclick = function () { location.reload() };
                        btnjogar.style.width = '120px';
                        btnjogar.focus();
                        return;
                    }

                    // Reduzindo tentativas
                    tentativas--;
                    btnjogar.value = `${contador + 1}º Tentativa`;
                    contador++;
                    valortentativa.value = '';
                    valortentativa.focus();
                }
                break;

            case 3:
                // Validando o valor jogado
                if (valorjogado < 1 || valorjogado > 1000) {
                    alert("Digite um valor válido entre 1 e 10!");
                    return;
                }
                // Verificando se o usuário acertou
                else if (valorjogado === numeroAleatorio) {
                    resultado.innerHTML = `Parabéns! Você acertou com ${contador} tentativas!`;
                    btnjogar.value = "Jogar Novamente";
                    btnjogar.onclick = function () { location.reload() };
                    btnjogar.style.width = '120px';
                    return;
                }
                else {
                    // Dando dica ao usuário
                    if (valorjogado < numeroAleatorio) {
                        resultado.innerHTML = "Você errou! Dica: O número é maior!";
                    } else {
                        resultado.innerHTML = "Você errou! Dica: O número é menor!";
                    }
                    // Verificando tentativas restantes
                    if (tentativas === 1) {
                        resultado.innerHTML = `Suas tentativas acabaram! O número era ${numeroAleatorio}.`;
                        btnjogar.value = "Jogar Novamente";
                        btnjogar.onclick = function () { location.reload() };
                        btnjogar.style.width = '120px';
                        btnjogar.focus();
                        return;
                    }

                    // Reduzindo tentativas
                    tentativas--;
                    btnjogar.value = `${contador + 1}º Tentativa`;
                    contador++;
                    valortentativa.value = '';
                    valortentativa.focus();
                }
                break;
        }
    }
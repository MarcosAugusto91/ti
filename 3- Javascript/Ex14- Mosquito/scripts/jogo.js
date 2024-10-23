let altura, largura = 0
let vidas = 1

function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log("Largura:", largura, "Altura:", altura)
}

ajustaTamanhoTela()

let cronometro = setInterval(
    function(){
            tempo -= 1
                if( tempo < 0){
                    clearInterval(cronometro)
                    clearInterval(criaMosquito)
                    window.location.href = 'vitoria.html'
                } else{ 
                document.getElementById('cronometro').innerHTML = tempo
                }
            }, 1000)

function randomizaPosicao(){

    //remover mosquito anterior
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove() 

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'}
            else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
            }
        }

    let posicaoX = Math.floor(Math.random() * largura) -100
    let posicaoY = Math.floor(Math.random() * altura) -100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = (tamanhoAleatorio() + ' ' +  ladoAleatorio())
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()}

    //colocar o elemento na tela
    document.body.appendChild(mosquito)
}

//Escolher o tamanho do mosquito
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2: 
            return "mosquito3"
    }
}

//Escolher a direção do mosquito
function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}

//reiniciando o jogo
function reiniciar(){
    window.location.href = 'index.html'
}

//iniciando o jogo
function iniciar(){
    window.location.href = 'app.html'
}
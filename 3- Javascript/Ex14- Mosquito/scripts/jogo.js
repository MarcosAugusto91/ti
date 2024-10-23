let altura, largura = 0

function ajustaTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log("Largura:", largura, "Altura:", altura)
}

ajustaTamanhoTela()

function randomizaPosicao(){

    //remover mosquito anterior
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove() 
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
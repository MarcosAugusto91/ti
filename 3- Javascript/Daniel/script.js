function criarCampos(){
    let quantidadeNumeros = document.getElementById('quantidadeNumeros').value
    let digiteNumero = document.getElementById('digiteNumero')
   
    digiteNumero.innerHTML = " "
    for(let i = 0; i < quantidadeNumeros; i++){        
        digiteNumero.innerHTML += `<div>`
        digiteNumero.innerHTML += `<label>Insira um número: </label>`
        digiteNumero.innerHTML += `<input class="numero" id="${"numero" + i}" type="number">`
        digiteNumero.innerHTML += `</div>`
    }
}

function soma(){
    let numero = document.getElementsByClassName('numero').length
    let conta = []
    let som = 0
    for(let i = 0; i < numero; i++){
        conta[i] = document.getElementsByClassName('numero')[i].value
        som += conta[i]
    }

    console.log(`A soma do valor é ${som}`)

}

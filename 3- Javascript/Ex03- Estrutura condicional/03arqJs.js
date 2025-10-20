function calcular() {
    let vel = window.document.getElementById('vel') //POR ID
    
    /* 
    let vel = window.document.getElementsByTagName('input')[0] //POR TAG
    let vel = window.document.getElementsByName('vel') //POR NAME
    let vel = window.document.getElementsByClassName('vel') //POR CLASS
    let vel = window.document.querySelector('input.vel') //POR SELECTOR   
    */

    let resp = window.document.getElementById('resp')
    let velocidade = Number(vel.value)

    if (velocidade <= 40) {
        resp.innerText = 'Você está dentro da velocidade Permitida!'
    } else if (velocidade > 40 && velocidade < 100) {
        resp.innerHTML = 'Você está acima da velocidade, será <strong>MULTADO!</strong>'
    } else {
        resp.innerHTML = 'Você está muito acima da velocidade permitida, será <strong>MULTADO</strong> e o veículo será <strong>APREENDIDO!</strong>'
    }
}
function calcular() {
    let vel = window.document.getElementById('vel')
    let resp = window.document.getElementById('resp')
    let velocidade = Number(vel.value)
    // resp.innerHTML = `Sua velocidade atual é ${velocidade}Km/h`

    if (velocidade <= 40) {
        resp.innerText = 'Você está dentro da velocidade Permitida!'
    } else if (velocidade > 40 && velocidade < 100) {
        resp.innerHTML = 'Você está acima da velocidade, será <strong>MULTADO!</strong>'
    } else {
        resp.innerHTML = 'Você está muito acima da velocidade permitida, será <strong>MULTADO</strong> e o veículo será <strong>APREENDIDO!</strong>'
    }
}
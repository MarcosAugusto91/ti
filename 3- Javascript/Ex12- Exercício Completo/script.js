let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.querySelector('div#res')
let valores = []

num.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        btnAdicionar.click();
    }
})

function adicionar() {
    if (validacao0100(num.value) && !validaLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert(`O valor ${num.value} está fora do intervalo ou já foi adicionado!`)
    }
    num.value = ''
    num.focus()
}

function validacao0100(n) {
    if (Number(n) > 0 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

function validaLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    let total = valores.length
    let soma = 0
    let media = 0

    if (valores.length <= 0) {
        window.alert('Insira valores na lista antes de calcular!')
    } else {

        for (let pos in valores) {
            soma += Number(valores[pos])
        }
        media = soma / valores.length
        Math.round(media, 2)

        valores.sort((a, b) => a - b) // Ordena os valores em ordem crescente

        resultado.innerHTML = `<p>Ao todo, temos <strong>${total}</strong> números cadastrados!</p> 
                               <p>O menor valor da lista é <strong>${Number(valores[0])}</strong></p>
                               <p>O maior valor da lista é <strong>${Number(valores[total - 1])}</strong></p>
                               <p>Soma dos valores do Vetor: <strong>${soma}</strong></p>
                               <p>A média dos valores da lista é: <strong>${media}</strong>`
        num.focus()
    }
    num.focus()
}
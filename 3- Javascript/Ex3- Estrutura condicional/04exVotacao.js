console.log()
var idade = 66
console.log(`Você tem ${idade} anos`)

if (idade < 16){
    console.log('Você não pode votar!')
} else if (idade < 18 || idade > 65) {
    console.log('Voto facultativo!')
} else {
    console.log('Voto obrigatório!')
}
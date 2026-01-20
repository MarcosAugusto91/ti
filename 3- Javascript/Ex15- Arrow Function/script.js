function somarTradicional(a, b) {
    return a + b;
}
console.log(somarTradicional(5, 3)); // Output: 8

const somar = (a, b) => a + b;
console.log(somar(5, 3)); // Output: 8

//---------------------------------------------------------

function mensagemTradicional() {
    return "Bem vindo";
}
console.log(mensagemTradicional()); // Output: Bem vindo

const mensagem = () => "Bem vindo";
console.log(mensagem()); // Output: Bem vindo

//---------------------------------------------------------

const quadrado = (x) => x * x;
console.log(quadrado(4)); // Output: 16


//---------------------------------------------------------

function mensagemCompletaTradicional(nome, idade) {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
    return mensagem;
}   
console.log(mensagemCompletaTradicional("Marcos",34)) // Output: Olá, meu nome é Marcos e tenho 34 anos.

const mensagemCompleta = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
    return(mensagem);
}
console.log(mensagemCompleta("Marcos",34)) // Output: Olá, meu nome é Marcos e tenho 34 anos.
const pessoa = {
    nome: 'Marcos',
    idade: 34,
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    },
    time: 'São Paulo'
};

pessoa.saudacao(); // Chama o método saudacao do objeto Pessoa
console.log(pessoa.nome); // Acessa a propriedade nome do objeto Pessoa
console.log(pessoa.idade); // Acessa a propriedade idade do objeto Pessoa


console.log('--------------------------------------------------------------------------');

const animal = {
    nome: 'Toby',
    idade: '2 anos',
    saudacao: pessoa.saudacao
};

animal.saudacao(); // Chama o método saudacao do objeto Animal


console.log('--------------------------------------------------------------------------');

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    detalhes: () => {
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano de ${this.ano}.`);
    }
};

carro.detalhes(); // Chama o método detalhes do objeto Carro (não funciona como esperado devido ao uso de arrow function)

console.log(carro.marca); // Acessa a propriedade marca do objeto Carro
console.log(carro.modelo); // Acessa a propriedade modelo do objeto Carro
console.log(carro.ano); // Acessa a propriedade ano do objeto Carro
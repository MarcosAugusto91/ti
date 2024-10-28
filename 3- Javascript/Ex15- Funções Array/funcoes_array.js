/********************************MAP*************************************/

    /*Exemplo 1*/
    const numeros = [10,15,30,50,70,9,6,3]
    let raizDeNumeros = numeros.map(elem => Math.sqrt(elem).toFixed(2))
    console.log('Raizes: ' + raizDeNumeros)

    /*Exemplo 2*/
    const produtos = [
        { nome: 'Camiseta', preco: 29.99 },
        { nome: 'Calça', preco: 49.99 },
        { nome: 'Tênis', preco: 89.99 }
    ];

    let caixaAlta = produtos.map(produto => produto.nome.toUpperCase())
    console.log('Produtos: ' + caixaAlta)

/*******************************FILTER**********************************/

    /*Exemplo 1*/
    const numeros2 = [5, 12, 8, 130, 44, 27, 3, 51, 60];
    const numerosFiltrados = numeros2.filter(numero => numero >= 10 && numero <= 50);
    console.log('Maiores(10) e Menores(50): ' + numerosFiltrados);

    /* Exemplo 2*/
    const pessoas = [
        { nome: 'Ana', idade: 17 },
        { nome: 'João', idade: 20 },
        { nome: 'Maria', idade: 19 }
    ];

    let validaIdade = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.idade <= 65)
    console.log(validaIdade)

/*********************************REDUCE*********************************/

    /*Exemplo 1*/
    const numerosReduce = [10,12,15,30,65,78,102,1024,327,15,2,10,156]
    let somaReduce = numerosReduce.reduce((prev, n) => prev + n, 0)
    console.log('Soma: ' + somaReduce)

    /*Exemplo 2*/
    const transacoes = [
        { tipo: 'deposito', valor: 100 },
        { tipo: 'retirada', valor: 50 },
        { tipo: 'deposito', valor: 200 }
    ];

    let saldoFinal = transacoes.reduce((prev,valores) => prev + valores.valor,0)
    console.log('Saldo Final: ' + saldoFinal)
              
/*********************************EVERY**********************************/

    /*Exemplo 1*/
    const posNeg = [-1,-2,3,5,15,10]
    
    let validaPosNeg = posNeg.every(numeroEvery => numeroEvery > 0)
    console.log('Todos positivos: ' + validaPosNeg)
       
    /*Exemplo 2*/

    const alunos = [
        { nome: 'Ana', nota: 7 },
        { nome: 'João', nota: 5 },
        { nome: 'Maria', nota: 8 }
      ];

    let nota = alunos.every(notaEvery => notaEvery.nota >= 6)
    console.log('Todos média > 6: ' + nota)
                    
/********************************SOME************************************/    

    /*Exemplo 1*/
    let validaPosNegSome = posNeg.some(numeroSome => numeroSome < 0)
    console.log('Algum negativo: ' + validaPosNegSome)

    /*Exemplo 2*/
    const produtosSome = [
        { nome: 'Camiseta', preco: 29.99 },
        { nome: 'Calça', preco: 49.99 },
        { nome: 'Tênis', preco: 120.00 }
    ];

    let preco = produtosSome.some(prod => prod.preco > 100)
    console.log('Algum maior (100): ' + preco)    

/********************************FIND************************************/

    /*Exemplo 1*/
    const numerosFind = [0,10,11,12,13,14,15]
    
    let numeroEncontrado = numerosFind.find(num => num > 10)
    console.log('1º > 10: ' + numeroEncontrado)

    /*Exemplo 2*/
    const pessoasFind = [
        { nome: 'Ana', idade: 17 },
        { nome: 'João', idade: 20 },
        { nome: 'Maria', idade: 19 }
      ];
    
    let pessoaMaior = pessoasFind.find(pessoaM => pessoaM.idade > 18)
    console.log(pessoaMaior)
      

/********************************INCLUDES********************************/   

    /*Exemplo 1*/
    const numeroIncludes = [0,10,12,15,20,21]
    let nIncludes = numeroIncludes.includes(22)
    console.log('Contém(22): ' + nIncludes)

    /*Exemplo 2*/
    const frutas = [
        {fruta: 'Banana',  preco: 7.50},
        {fruta: 'Laranja', preco: 8.90},
        {fruta: 'Maçã',    preco: 6.90},
        {fruta: 'Manga',   preco: 12.00}];
    
    let fruta = frutas.filter(f => f.fruta.includes('Maçã'))
    console.log(fruta)

/************************************************************************/
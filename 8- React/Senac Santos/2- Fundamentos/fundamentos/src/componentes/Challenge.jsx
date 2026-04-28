const Challenge = () => {
    
    const valor1 = 10;
    const valor2 = 20;

    //Diferença entre usar const ou fuction

    //O uso de const com uma "seta" (=>) é chamado de Arrow Function. É uma sintaxe introduzida no JavaScript moderno (ES6) que se tornou o padrão na comunidade React. Como os próprios componentes muitas vezes são criados assim (const Challenge = () => { ... }), manter as funções internas no mesmo estilo deixa o código visualmente consistente.

    //This: Essa é a diferença técnica mais importante, embora em componentes funcionais (como o Challenge) ela não faça tanta diferença quanto fazia antigamente em componentes de Classe.
    //Arrow Functions (const): Elas não criam seu próprio contexto de this. Elas herdam o contexto de onde foram criadas. Isso evita muitos bugs estranhos.
    //Funções tradicionais (function): Elas têm seu próprio this, o que pode variar dependendo de quem chamou a função (o botão, o navegador, etc.).

    //Hoisting: (Içamento)
    //function handleSoma() {}: O JavaScript "move" (iça) essa declaração para o topo do código antes de executar. Isso significa que você poderia chamar handleSoma() na linha 1 mesmo se ela fosse declarada na linha 20.
    //const handleSoma = ...: Não sofre hoisting da mesma forma. Você é obrigado a declarar a função antes de usá-la. Muitos programadores preferem isso porque torna o fluxo de leitura do código mais lógico (de cima para baixo).
    
    const handleSoma = () => {
        let resultado = valor1 + valor2;
        alert(`O resultado da soma é: ${resultado}`); 
        console.log(`O resultado da soma é: ${resultado}`);
        //document.writeln("O resultado da soma é: " + resultado);
    };

    const handleSoma2 = (a,b) => {
        let resultado = a + b;
        alert(`O resultado da soma é: ${resultado}`); 
        console.log(`O resultado da soma é: ${resultado}`);
    };

    return (
        <>
            <p>{valor1} + {valor2}</p>
            <button onClick={handleSoma}>Somar</button> 
            <button onClick={() => handleSoma2(valor1, valor2)}> Função com Parâmetros</button>
            <hr />
        </>
    );
}

export default Challenge;
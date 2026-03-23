import MyComponent from './MyComponent'

const TemplateExpressions = () => {
    const name = "Marcos";
    const data = {
        age: 34,
        job: 'Programador'
    }

    /*
     Template Expressions = {} Onde colocamos o nosso código javascript puro;
     
     JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript, amplamente utilizada no React, que permite escrever marcações semelhantes ao HTML diretamente dentro do código JavaScript. Ele facilita a criação de componentes de interface, tornando o código mais intuitivo e visual, sendo posteriormente convertido em JavaScript puro pelo compilador
    */

    return(
    <>
        <h1>TemplateExpressions</h1>
        <h2>Olá {name}, tudo bem?</h2>
        <p>Idade: {data.age}</p>
        <p>Profissão: {data.job}</p>
        <p>{8+8}</p>
        <p>{console.log('Olá Mundo!')}</p>
        <MyComponent />
    </>
 );
}

export default TemplateExpressions;
import MyComponent from './MyComponent';
const TemplateExpressions = () => {
    const name = "Marcos";
    const data = {
        age: 34,
        job: 'Programador'
    }
    return(
    <>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Idade: {data.age}</p>
        <p>Profissão: {data.job}</p>
        <p>{8+8}</p>
        <p>{console.log('Olá Mundo!')}</p>
        <MyComponent />
    </>
 );
}

export default TemplateExpressions;
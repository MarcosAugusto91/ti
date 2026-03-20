const Challenge = () => {
    
    const valor1 = 10;
    const valor2 = 20;
    
    const handleSoma = () => {
        let resultado = valor1 + valor2;
        alert("O resultado da soma é: " + resultado); 
        console.log("O resultado da soma é: " + resultado);
        //document.writeln("O resultado da soma é: " + resultado);
    }

    return (
        <>
            <p>{valor1} + {valor2}</p>
            <button onClick={handleSoma}>Somar</button> 
            <hr />
        </>
    );
}

export default Challenge;
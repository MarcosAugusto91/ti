const Events = () => {

const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento 1 ativado!"); 
};

const renderSomething = (x) => {
    if(x){
        return <h1>Renderizando isso!</h1>;
    } else {
        return <h1>Também pode renderizar isso!</h1>;
    }   
};

return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Função Maior com Nome!</button>
        </div>

        <div>
            <button onClick={() => console.log("Evento 2 ativado!")}>Função Menor sem Nome!</button>
        </div>

        <div>
            <button onClick={() => {
                if(true){
                    console.log("Evento 3 ativado!");
                }
                //Usar lógica somente nas funções maiores, que contém nome!
                //Evitar usar lógica em arrow functions inline!
            }}>Não fazer dessa forma! Sobrecarrega o HTML</button>
        </div>
            {renderSomething(true)}
            {renderSomething(false)}
    </div>
);

}
export default Events;
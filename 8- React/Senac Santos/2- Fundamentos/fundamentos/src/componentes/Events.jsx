const Events = () => {

const handleMyEvent = (e) => {
    console.log(e);
    console.log("Evento 1 ativado!"); 
};

const renderSomething = (x) => {
    if(x){
        return <h2>Renderizando True!</h2>;
    } else {
        return <h2>Renderizando False!</h2>;
    }   
};



return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Função Comum Maior +1 ação</button>
        </div>

        <div>
            <button onClick={() => console.log("Evento 2 ativado!")}>Função Anônima 1 Ação</button>
        </div>

        <div>
            <button onClick={() => {
                if(true){
                    console.log("Evento 3 ativado!");
                }
                //Usar lógica somente nas funções maiores, que contém nome!
                //Evitar usar lógica em arrow functions inline!
            }}>Não fazer dessa forma! Sobrecarrega o HTML/JSX</button>
        </div>
            {renderSomething(true)}
            {renderSomething(false)}
            <hr />
    </div>
);

}
export default Events;
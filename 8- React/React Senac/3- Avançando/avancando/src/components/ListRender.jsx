import {useState} from 'react'

const ListRender = () => {
const [list] = useState(["Matheus", "João", "Maria", "Ana"])

const [users, setUsers] = useState([
    {id: 1, name: "Matheus", age: 30},
    {id: 2, name: "João", age: 25},
    {id: 3, name: "Maria", age: 28},
    {id: 4, name: "Ana", age: 22},
])   

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)+1;
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)      
    });
};

    // A função deleteRandom é responsável por remover um usuário aleatório da lista de usuários. 
    // Dentro da função, geramos um número aleatório entre 1 e 5 (considerando que os IDs dos usuários variam de 1 a 4).
    // Em seguida, usamos o método setUsers para atualizar o estado dos usuários. 
    // O setUsers recebe uma função que tem como parâmetro o estado anterior (prevUsers). 
    // Isso é útil para garantir que estamos trabalhando com o estado mais recente, especialmente em casos onde o estado pode ser atualizado de forma assíncrona.
    // Dentro dessa função, usamos o método filter para criar uma nova lista de usuários, excluindo aquele cujo ID corresponde ao número aleatório gerado.
    // Finalmente, essa nova lista é retornada e atualiza o estado dos usuários.
    // Então o prevUsers representa o estado atual da lista de usuários antes da atualização, permitindo que façamos a filtragem corretamente. Uma função nativa do JavaScript.

return (
    <div>
        <h2>Renderizando Listas e Objetos</h2>
        <ul>
            {/* Renderizando Listas */}
            { list.map((item, i) => (
              <li key={i}>{item}</li>  
            ))}
        </ul>

        <ul>
            {/* Renderizando Objetos */}
            {users.map((user) => (
                <li key={user.id}> 
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender;
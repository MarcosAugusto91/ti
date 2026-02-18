import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    //6- Controlled inputs
    //O useState vinha anteriormente vazio '', trocamos e colocamos o valor do user, caso ele exista, para preencher os inputs com os dados do usuário. Assim, quando passamos o objeto user como prop, os inputs já aparecem preenchidos com as informações do usuário. Se não passarmos um objeto user, os inputs permanecerão vazios, permitindo que o usuário insira suas informações normalmente.

    //3- gerenciamento de dados - useState
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState('')
 
    const [role, setRole] = useState('')
    
    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5- Envio de formulário
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o formulário')
        console.log(name, email, bio, role)

    //7- Limpar os inputs após o envio
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
    <div>
        {/* 1- Criando o form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name" 
                placeholder='Digite seu Nome' 
                onChange={handleName} 
                value={name}
                autoFocus
                />
            </div>

            {/* 2- Label envolvendo Input */}
            <label>
                {/* 4- Simplificação da manipulação do state */}
               <span>Email: </span>
               <input 
               type="email" 
               name="email" 
               placeholder='Digite seu Email' 
               onChange={(e) => setEmail(e.target.value)}
               value={email}/>
            </label>

            {/* 8- TextArea */}
            <label>
                <span>Bio: </span>
                <textarea 
                    name="bio" 
                    placeholder='Descrição do usuário:' 
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}    
                ></textarea>
            </label>

            {/* 9- Select */}
            <label>
                <span>Função do Sistema:</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>



  )
}

export default MyForm
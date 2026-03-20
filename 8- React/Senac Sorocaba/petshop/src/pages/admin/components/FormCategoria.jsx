import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api";

const FormCategoria = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Captura o ID da URL
    const [nomeCategoria, setNomeCategoria] = useState('');

    // Efeito para buscar dados se estiver em modo de edição
    useEffect(() => {
        if (id) {
            api.get(`categorias/${id}/`)
                .then(resposta => setNomeCategoria(resposta.data.nome));
        }
    }, [id]); // Re-executa se o ID mudar

    const CadCategoria = (evento) => {
        evento.preventDefault();

        if (id) {
            // Modo Edição: Lógica para PUT na API
            api.put(`/categorias/${id}/`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: []
            })
                .then(() => {   
                    alert("Alterado com Sucesso!");
                    navigate('/admin'); // ATUALIZAÇÃO: Navega para /admin
                });
            } else {

        // Modo Cadastro: Lógica para POST na API
        api.post(`/categorias`, {
            id: nomeCategoria, // (JSON-Server usa 'id', mas o ideal seria a API gerar o ID)
            nome: nomeCategoria,
            subcategorias: []
        })
            .then(() => {
                alert("Cadastrado com Sucesso!");
                navigate('/admin'); // ATUALIZAÇÃO: Navega para /admin
            });
    }
}
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">
                    {/* título dinâmico */}
                    {id ? 'Editar Categoria' : 'Cadastro de Categorias'}
                </h2>
                <br />
                <form onSubmit={CadCategoria} >
                    <TextField
                        value={nomeCategoria}
                        onChange={evento => setNomeCategoria(evento.target.value)}
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        {id ? 'Salvar Alterações' : 'Cadastrar Categoria'}
                    </Button>
                </form>
            </article>
        </main>
    );
}

export default FormCategoria;
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { api, busca } from "../../../api";
import { useParams, useNavigate } from "react-router-dom";

const FormSubCategoria = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nomeCategoria, setNomeCategoria] = useState('');
    const [subcategorias, setSubCategorias] = useState([]);

    // (Estados para os inputs)
    const [subCategoria1, setSubCategoria1] = useState('');
    const [subCategoria2, setSubCategoria2] = useState('');

    // (Lógica de busca e salvamento será adicionada na Atividade 4)
    // Efeito para buscar o nome da categoria e as subcategorias existentes
    useEffect(() => {
        if (id) {
            api.get(`categorias/${id}`)
                .then((resposta) => {
                    setNomeCategoria(resposta.data.nome);
                    setSubCategorias(resposta.data.subcategorias);
                    // Pré-preenche os campos (se existirem)
                    if (resposta.data.subcategorias.length > 0) {
                        setSubCategoria1(resposta.data.subcategorias[0] || '');
                        setSubCategoria2(resposta.data.subcategorias[1] || '');
                    }
                });
        }
    }, [id]);

    // Função de salvamento (PUT)
    const CadSubCategoria = (evento) => {
        evento.preventDefault();
        if (id) {
            // Filtra subcategorias vazias antes de salvar
            const subcategoriasFinais = [subCategoria1, subCategoria2].filter(sub => sub.trim() !== '');

            api.put(`/categorias/${id}/`, {
                id: nomeCategoria, // O doc passa o nome da categoria como ID
                nome: nomeCategoria,
                subcategorias: subcategoriasFinais
            })
                .then(() => {
                    alert("Sucesso na atualização!");
                    navigate('/admin');
                });
        }
    }

    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h3 className="titulo-pagina">
                    Categoria: {id} / Subcategorias:
                </h3>
                {/* Exibe subcategorias atuais */}
                {
                    subcategorias.map((subcategoria) => (
                        <p key={subcategoria.id}>- {subcategoria}</p>
                    ))
                }
                <br />
                <form onSubmit={CadSubCategoria}>
                    <TextField
                        value={subCategoria1}
                        onChange={(evento) => setSubCategoria1(evento.target.value)}
                        label="Subcategoria 1"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <TextField
                        value={subCategoria2}
                        onChange={(evento) => setSubCategoria2(evento.target.value)}
                        label="Subcategoria 2"
                        variant="filled"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 2 }}
                        fullWidth
                    >
                        Salvar
                    </Button>
                </form>
            </article>
        </main>
    );
};

export default FormSubCategoria;
// petshop/src/paginas/admin/components/ListaPostAdmin.jsx
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api, busca } from "../../../api";
import { Link } from "react-router-dom";

const ListaPostAdmin = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        busca(`/posts`, setPosts);
    }, []);

    const excluir = (PostDel) => {
        api.delete(`posts/${PostDel.id}/`).then(() => {
            const listaPosts = posts.filter((post) => post.id !== PostDel.id);
            setPosts([...listaPosts]);
        });
    };

    return (
        <section className="container">
            <table className="tabela">
                <thead>
                    <tr>
                        <th className="tabela__coluna--p">Categoria</th>
                        <th className="tabela__coluna--m">Título</th>
                        <th className="tabela__coluna--m">Posts</th>
                        <th className="tabela__coluna--p tabela__alinhamento--direita">
                            <Link
                                to="/admin/posts/NovoPost"
                            >
                                <Button type="button" variant="contained" fullWidth>
                                    Novo Post
                                </Button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.categoria}</td>
                            <td>
                                <Link
                                    to={`/posts/${post.id}`}>{post.title}
                                </Link>
                            </td>
                            <td>{post.metadescription}</td>
                            <td>
                                <Link
                                    to={`/admin/posts/${post.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        type="button"
                                        variant="contained"
                                        color="warning"
                                        sx={{ margin: "0.25rem 0" }}
                                        fullWidth
                                    >
                                        Editar
                                    </Button>
                                </Link>
                                <br />
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="error"
                                    sx={{ margin: "0.25rem 0" }}
                                    onClick={() => excluir(post)}
                                    fullWidth
                                >
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ListaPostAdmin;
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import { busca } from '../api';

const Categoria = () => {
    // Captura o 'id' da categoria (ex: "bem-estar", "comportamento")
    const { id } = useParams();
    const [subcategorias, setSubCategorias] = useState([]);

    // Busca as subcategorias da categoria principal
    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias);
        })
    }, [id]);

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />

            {/* Renderiza a lista de links para as subcategorias */}
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            {/* O Link 'to' agora é relativo à rota atual */}
                            <Link to={subcategoria}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* 
                O <Outlet> é o "espaço reservado" onde o React Router v6
                irá renderizar os componentes filhos (index ou :subcategoria) definidos no App.jsx.
            */}
            <Outlet />
        </>
    )
}

export default Categoria;
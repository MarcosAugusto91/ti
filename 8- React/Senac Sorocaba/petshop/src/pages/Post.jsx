import {useState, useEffect, use } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { busca } from '../api';

const Post = () => { 
  const{ id } = useParams()

  const[post, setPost] = useState({})

  const navegar = useNavigate();

  useEffect(() => {
    // Busca o post usando o ID capturado
    busca(`/posts/${id}`, setPost)
    .catch(() => {
      // Em caso de erro, navega para a página 404
      // O useNavigate que faz o redirecionamento
      navegar('/erro404');
    });
  }, [id])

  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <h3 className="cartao-post__meta">{post.metadescription}</h3>
        <br />
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post
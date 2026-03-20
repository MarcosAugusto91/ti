import { busca } from "../api.jsx";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const ListaPost = ({ url }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        busca(url, setPosts)
    }, [url])

    console.clear();

    return (

        <section className="posts container">
            {posts.map((post) => {
                console.log(post);
                return (
                    <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} >
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo">
                                {post.title}
                            </h3>
                            <p className="cartao-post__meta">
                                {post.metadescription}
                            </p>
                        </article>
                    </Link>
                )
            })

            }
        </section>

    )
}

export default ListaPost
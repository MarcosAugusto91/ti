import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const SubCategorias = () => {
    //Captura o parâmetro :subcategoria da URL
    const { subcategoria } = useParams();

    return(
        //render do ListPost com a URL filtrada pela subcategoria
        

        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategorias;
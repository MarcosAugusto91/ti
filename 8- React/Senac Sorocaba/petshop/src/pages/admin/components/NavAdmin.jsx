import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import imagem from '../../../assets/img/catiorrinhoAdmin.svg';




const NavAdmin = () => {
    return (
        <>{
            <section className="container">
                <table className="tabela">
                    <thead>
                        <tr>
                            <th>
                                <img className="cabecalho__logo" src={imagem} alt="Logo Catiorrinho" />
                            </th>
                            <th className="tabela__coluna--g">
                                <h3 className="cabecalho__titulo">Administração</h3>
                            </th>
                            <th className="tabela__coluna--m">
                                <Link to="/admin">
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ margin: "0.25rem 0" }}
                                    >
                                        Categorias
                                    </Button>
                                </Link>
                            </th>
                            <th className="tabela__coluna--m">
                                <Link to="/admin/posts/">
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        Posts
                                    </Button>
                                </Link>

                            </th>
                        </tr>
                    </thead>
                </table>
            </section>
        }
        </>
    );
}

export default NavAdmin;
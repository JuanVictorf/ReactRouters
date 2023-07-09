
import { Link } from "react-router-dom";

function Erro(){
    return (
        <div>
            <h2>Opss.. Página não encontrada</h2>
            <span>Páginas para acesso: </span> <br />
            <Link to="/">Home</Link> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link><br />
        </div>
    )    
}

export default Erro;
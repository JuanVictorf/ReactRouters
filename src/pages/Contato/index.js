
import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa: (85) 3232-3232</span> <br /> <br />

            <Link to="/">Home</Link> <br />
            <Link to="/Sobre">Sobre</Link>
        </div>
    )
}

export default Contato;
import { Link } from "react-router-dom";

const Categorias = () =>{
    return(
        <ul className="d-flex justify-content-around w-50">
            <li className="nav-link">
              <Link className="btn btn-light btn-bordered btn-outline-dark" to={"/category/1"}>Monstruos</Link>
            </li>
            <li className="nav-link">
              <Link className="btn btn-light btn-bordered btn-outline-dark" to={"/category/2"}>Magicas</Link>
            </li>
            <li className="nav-link">
              <Link className="btn btn-light btn-bordered btn-outline-dark" to={"/category/3"}>Trampas</Link>
            </li>
        </ul>
    );
}

export default Categorias;
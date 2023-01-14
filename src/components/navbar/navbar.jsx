import { Link } from "react-router-dom";
import "./categorias/Categorias";
import Categorias from "./categorias/Categorias";
import CartWidget from "../cartWidget/CartWidget";
import BotonDarkMode from "./botonDarkMode/BotonDarkMode";

//context
import { useDarkModeContext } from "../../context/DarkModeContext";

function App() {

  const {darkMode} = useDarkModeContext();
  return (
    <nav className={`bg-gradient w-100 p-2 ${darkMode === true ? 'bg-dark' : 'bg-secondary'} `}>
      <div className="d-flex align-items-center justify-content-between">
        <Link className="btn btn-light btn-bordered btn-outline-dark" to={"/"}>Home</Link>
        <Categorias className=""/>
        <div className="d-flex">
          <CartWidget/>
          <BotonDarkMode/>
        </div>
      </div>
    </nav>
  );
}
export default App;

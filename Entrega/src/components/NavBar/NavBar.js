import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { contexto } from "../Context/CartContex";
import { useContext } from "react";

function NavBar(props) {
  const { hayItems } = useContext(contexto);

  return (
    <div className="NavBar">
      <div className="imagen">
        <Link to="/">
          <img src="imagenes/logo.jpeg" alt="logo" />
        </Link>
      </div>
      <div className="Nav">
        <ul>
          <div className="item-nav">
            <Link to="/category/cocina">
              <li>
                <span>Cocina</span>
              </li>
              <br />
            </Link>
          </div>
          <div className="item-nav">
            <Link to={"/category/baño"}>
              <li>
                <span>Baño</span>
              </li>
              <br />
            </Link>
          </div>
          <div className="item-nav">
            <Link to="/category/local">
              <li>
                <span>Local</span>
              </li>
              <br />
            </Link>
          </div>
          <div className="item-carrito">
            <li>{hayItems ? <CartWidget /> : undefined}</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

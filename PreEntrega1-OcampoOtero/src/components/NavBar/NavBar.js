import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar(props) {
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
            <Link to={"/detalle"}>
              <li>
                <i class="fa-duotone fa-hat-chef"></i>
              </li>
              <br />
            </Link>
            <span>Cocina</span>
          </div>
          <div className="item-nav">
            <li>
              <i className="fa-regular fa-envelope"></i>
            </li>
            <br />
            <span>Contacto</span>
          </div>
          <div className="item-nav">
            <li>
              <i className="fa-regular fa-lightbulb"></i>
            </li>
            <br />
            <span>Productos</span>
          </div>
          <div className="item-carrito">
            <li>
              <CartWidget numero="30" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

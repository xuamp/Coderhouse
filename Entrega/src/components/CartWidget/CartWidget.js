import "./CartWidget.css";
import { useContext } from "react";
import { contexto } from "../Context/CartContex";
import { Link } from "react-router-dom";

function CartWidget(props) {
  const { cant } = useContext(contexto);

  return (
    <div className="Carrito">
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
      <p>{cant}</p>
    </div>
  );
}

export default CartWidget;

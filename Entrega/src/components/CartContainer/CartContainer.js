import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";
import { contexto } from "../Context/CartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartContainer(props) {
  const { carro, clear, total, hayItems } = useContext(contexto);

  return (
    <div className="CartContainer">
      {hayItems ? (
        <div>
          {carro.map((item) => (
            <CartItem
              precio={item.price}
              titulo={item.title}
              cantidad={item.quantity}
              imagen={item.pictureUrl}
              total={item.price * item.quantity}
              id={item.id}
            />
          ))}{" "}
          <button className="buttonCart" onClick={clear}>
            Vaciar
          </button>
          <p className="totalCompra">Total de la Compra: $ {total}</p>
          <Link to="/contacto">
            <button className="finalizar">Finalizar Compra</button>
          </Link>
        </div>
      ) : (
        <div>
          <p className="totalCompra"> No hay items en el carrito </p>
          <Link to="/">
            <button className="buttonCart">Inicio</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartContainer;

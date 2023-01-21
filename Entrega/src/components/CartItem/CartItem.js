import "./CartItem.css";
import { contexto } from "../Context/CartContex";
import { useContext } from "react";

function CartItem(props) {

  const { removeItem, setCant, cant, setTotal, total } = useContext(contexto)

  function eliminar (){
    const id = props.id
      removeItem(id)
      setCant(cant - props.cantidad)
      setTotal(total - props.total)

  }

  return (
    <div className="ItemDetail">
      <div>
        <img className="ImagenDetail" src={props.imagen} alt="fot"></img>
      </div>
      <div className="dataDetail">
        <p className="tituloDetail">{props.titulo}</p>
        <p className="precioDetail">Cantidad: {props.cantidad}</p>
        <p className="precioDetail">Precio Unitario: $ {props.precio}</p>
        <p className="precioDetail">Total: $ {props.total}</p>
        <button className="buttonCart" onClick={eliminar}>Eliminar</button>
      </div>
    </div>
  );
}

export default CartItem;

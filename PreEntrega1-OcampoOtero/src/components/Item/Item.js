import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <div className="Item">
      <p className="id">Item: {props.id}</p>
      <p className="titulo">{props.title}</p>
      <img
        className="imagenes"
        src={`imagenes/${props.pictureUrl}`}
        alt="sisi"
      />
      <p className="precio">$ {props.price}</p>
      <p className="descripcion">{props.descripcion}</p>
      <button className="boton-detalle">
        <Link to={"/detalle"}>Ver detalle</Link>
      </button>
    </div>
  );
}

export default Item;

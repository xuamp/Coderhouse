import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <div className="Item">
      <p className="titulo">{props.title}</p>
      <img className="imagenes" src={props.pictureUrl} alt="sisi" />
      <p className="precio">$ {props.price}</p>
      <p className="descripcion">{props.descripcion}</p>
      <button className="boton-detalle">
        <Link to={`/item/${props.id}`}>Ver detalle</Link>
      </button>
    </div>
  );
}

export default Item;

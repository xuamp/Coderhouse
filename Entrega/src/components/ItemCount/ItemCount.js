import "./ItemCount.css";

function ItemCount(props) {
  return (
    <div className="ItemCount">
      <div className="Barra-Contador">
        <i className="fa-solid fa-minus" onClick={props.menos}></i>
        <p>{props.contador}</p>
        <i className="fa-solid fa-plus" onClick={props.numero}></i>
      </div>
      <button
        className="boton-contador"
        onClick={props.contador === 0 ? undefined : props.agregar}
      >
        Agregar
      </button>
    </div>
  );
}

export default ItemCount;

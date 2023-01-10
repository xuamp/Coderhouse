import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
  const { aumento, contador, disminucion, anexion, detalle } = props;

  return (
    <div className="ItemDetail">
      <div>
        <img className="ImagenDetail" src={detalle.pictureUrl} alt="fot"></img>
      </div>
      <div>
        <p className="tituloDetail">{detalle.title}</p>
        <div className="descripcionDetail">
          <p>{detalle.descripcion}</p>
        </div>
        <p className="precioDetail">$ {detalle.price}</p>
        <ItemCount
          numero={aumento}
          contador={contador}
          menos={disminucion}
          agregar={anexion}
        />
      </div>
    </div>
  );
}

export default ItemDetail;

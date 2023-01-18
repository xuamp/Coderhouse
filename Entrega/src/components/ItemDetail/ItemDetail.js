import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail(props) {
  const { detalle } = props;

  const [compro, setCompro] = useState(false);
  const [contador, setContador] = useState(0);

  var stock = 8;

  function onAdd() {
    setCompro(true);
    console.log(`Se agregaron al carrito ${contador} productos`);
  }

  function incremento() {
    if (stock === contador) {
      setContador(contador);
    } else setContador(contador + 1);
  }

  function decremento() {
    if (contador <= 0) {
      setContador(0);
    } else setContador(contador - 1);
    return contador;
  }

  return (
    <div className="ItemDetail">
      <div>
        <img className="ImagenDetail" src={detalle.pictureUrl} alt="fot"></img>
      </div>
      <div className="dataDetail">
        <p className="tituloDetail">{detalle.title}</p>
        <div className="descripcionDetail">
          <p>{detalle.descripcion}</p>
        </div>
        <p className="precioDetail">$ {detalle.price}</p>
        {compro ? (
          <Link to={"/cart"}> <button className="carrito">Carrito</button></Link>
        ) : (
          <ItemCount
            numero={incremento}
            contador={contador}
            menos={decremento}
            agregar={onAdd}
          />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;

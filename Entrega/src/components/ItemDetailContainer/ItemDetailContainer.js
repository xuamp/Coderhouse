import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { productos } from "../Productos";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [objeto, setObjeto] = useState({});
  const valor = useParams();

  useEffect(() => {
    const filtrado = productos.find(
      (item) => item.id === parseInt(valor.numero)
    );
    setObjeto(filtrado);
  }, [valor.numero]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail detalle={objeto} />
    </div>
  );
}

export default ItemDetailContainer;

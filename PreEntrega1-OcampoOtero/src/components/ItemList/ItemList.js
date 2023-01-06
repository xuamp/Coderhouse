import { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { productos } from "../Productos";

function ItemList(props) {
  const [lista, setLista] = useState([]);
  const [impre, setImpre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      llamado();
      setImpre(
        lista.map((item) => (
          <Item
            id={item.id}
            price={item.price}
            descripcion={item.descripcion}
            pictureUrl={item.pictureUrl}
            title={item.title}
          />
        ))
      );
      setLoading(false);
    }, 2000);
  });

  function promesa() {
    return new Promise((resolve) => {
      resolve(productos);
    });
  }

  async function llamado() {
    const dato = await promesa();
    setLista(dato);
  }

  return (
    <div className="ItemList">
      {loading ? <p className="carga"> Cargando ...</p> : impre}
    </div>
  );
}

export default ItemList;

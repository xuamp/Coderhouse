import { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { productos } from "../Productos";
import { useParams } from "react-router-dom";

function ItemList(props) {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((resolve) => {
        const productosFiltrados = productos.filter(
          (item) => item.categoria === categoryName
        );
        const listado = categoryName ? productosFiltrados : productos;
        resolve(listado);
      });
    };
    setTimeout(() => {
      getProduct();
      getProduct().then((res) => setLista(res));
      setLoading(false);
    }, 2000);
  }, [categoryName]);

  return (
    <div className="ItemList">
      {loading ? (
        <p className="carga"> Cargando ...</p>
      ) : (
        lista.map((item) => (
          <Item
            id={item.id}
            price={item.price}
            descripcion={item.descripcion}
            pictureUrl={item.pictureUrl}
            title={item.title}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;

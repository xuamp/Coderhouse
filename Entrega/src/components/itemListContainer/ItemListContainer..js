import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../Productos";

function ItemListContainer(props) {

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
    <div className="landing">
      <h1>Agrega lo que mas te guste al carrito!!</h1>
      <ItemList lista={lista} loading={loading}/>
    </div>
  );
}

export default ItemListContainer;

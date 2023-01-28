import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { productsCollection } from "../../FiberbaseConfig";
import { ClipLoader } from "react-spinners";

function ItemListContainer(props) {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const getProductsF = () => {
      const filtro = query(
        productsCollection,
        where("categoria", "==", categoryName)
      );
      const pedido = getDocs(filtro);

      pedido
        .then((resultado) => {
          const catalogoFiltrado = resultado.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLista(catalogoFiltrado);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    const getProducts = () => {
      const pedido2 = getDocs(productsCollection);

      pedido2
        .then((resultado) => {
          const catalogo = resultado.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setLista(catalogo);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    categoryName ? getProductsF() : getProducts();
  }, [categoryName]);

  return (
    <div className="landing">
      <h1>Agrega lo que mas te guste al carrito!!</h1>
      {loading ? (
        <p>
          <ClipLoader color="black" />
        </p>
      ) : (
        <ItemList lista={lista} loading={loading} />
      )}
    </div>
  );
}

export default ItemListContainer;

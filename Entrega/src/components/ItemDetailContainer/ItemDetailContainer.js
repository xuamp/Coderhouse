import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { productsCollection } from "../../FiberbaseConfig";
import { ClipLoader } from "react-spinners";

function ItemDetailContainer(props) {
  const [objeto, setObjeto] = useState({});
  const [cargando, setCargando] = useState(true);
  const valor = useParams();

  useEffect(() => {
    function getProduct() {
      const referenciaDoc = doc(productsCollection, valor.numero);
      const pedido = getDoc(referenciaDoc);

      pedido
        .then((resultado) => {
          const producto = resultado.data();
          const detalle = { ...producto, id: resultado.id };
          setObjeto(detalle);
          setCargando(false);
        })
        .catch((error) => console.log(error));
    }
    getProduct();
  }, [valor.numero]);

  return (
    <div className="itemDetailContainer">
      {cargando ? (
        <p>
          <ClipLoader color="black" />
        </p>
      ) : (
        <ItemDetail detalle={objeto} />
      )}
    </div>
  );
}

export default ItemDetailContainer;

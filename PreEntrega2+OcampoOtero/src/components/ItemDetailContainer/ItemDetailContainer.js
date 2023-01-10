import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { productos } from "../Productos";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [contador, setContador] = useState(0);
  const [objeto, setObjeto] = useState({});
  const valor = useParams();

  var stock = 8;

  useEffect(() => {
    const filtrado = productos.find(
      (item) => item.id === parseInt(valor.numero)
    );
    setObjeto(filtrado);
  }, [valor.numero]);

  function onAdd() {
    console.log(`se agregaron ${contador} productos a su pedido`);
    setContador(0);
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
    <div className="itemDetailContainer">
      <ItemDetail
        aumento={incremento}
        contador={contador}
        disminucion={decremento}
        anexion={onAdd}
        detalle={objeto}
      />
    </div>
  );
}

export default ItemDetailContainer;

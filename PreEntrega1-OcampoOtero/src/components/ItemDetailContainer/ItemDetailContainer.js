import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useState } from 'react';


function ItemDetailContainer (props) {

  const [contador, setContador] = useState(0);

  var stock = 8;
  

  function onAdd () {
    console.log(`se agregaron ${contador} productos a su pedido`);
    setContador(0);
  }

  function prueba () {
    console.log('dale que va')
  }

  function incremento () {
    if (stock === contador) {
      setContador(contador)
    } else setContador (contador + 1)
  }

  function decremento () {
    if (contador <= 0) {
      setContador(0);
    }
    else setContador (contador - 1)
    return contador
  }

  return (
    <div className="itemDetailContainer">
      <ItemDetail aumento = {incremento} 
      contador={contador} 
      disminucion={decremento}
      anexion={onAdd}
      prueba={prueba}/>
     </div>
  );
}

export default ItemDetailContainer;
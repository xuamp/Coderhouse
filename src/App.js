
import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer.js/ItemListContainer.';
import NavBar from './components/NavBar/NavBar';

function App() {

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
    <div className="App">
      <NavBar />
      <ItemListContainer 
      aumento = {incremento} 
      contador={contador} 
      disminucion={decremento}
      anexion={onAdd}
      prueba={prueba}/>
    </div>
  );
}

export default App;

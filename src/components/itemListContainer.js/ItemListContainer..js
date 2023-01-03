
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


function ItemListContainer (props) {

  const { aumento, contador, disminucion, anexion } = props

  return (
    <div className="landing">
      <ItemCount numero={aumento} contador={contador} menos={disminucion} agregar={anexion} prueba={props.prueba}/>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
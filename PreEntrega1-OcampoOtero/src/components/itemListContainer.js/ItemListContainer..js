
import Alerta from '../Alerta/Alerta';
import './ItemListContainer.css';


function ItemListContainer (props) {

  return (
    <div className="landing">
      <p> {props.greeting} </p>
      <Alerta />
    </div>
  );
}

export default ItemListContainer;

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


function ItemListContainer (props) {

  return (
    <div className="landing">
      <ItemList />
      <ItemDetailContainer />
    </div>  
  );
}

export default ItemListContainer;
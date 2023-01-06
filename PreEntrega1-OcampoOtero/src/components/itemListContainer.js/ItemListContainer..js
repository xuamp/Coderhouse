import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="landing">
      <h1>Agrega lo que mas te guste al carrito!!</h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;

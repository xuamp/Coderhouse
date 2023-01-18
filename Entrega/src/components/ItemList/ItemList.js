import "./ItemList.css";
import Item from "../Item/Item";

function ItemList(props) {
  const { lista, loading } = props;

  return (
    <div className="ItemList">
      {loading ? (
        <p className="carga"> Cargando ...</p>
      ) : (
        lista.map((item) => (
          <Item
            id={item.id}
            price={item.price}
            descripcion={item.descripcion}
            pictureUrl={item.pictureUrl}
            title={item.title}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;

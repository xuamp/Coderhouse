import "./ItemList.css";
import Item from "../Item/Item";
import { SyncLoader } from "react-spinners";

function ItemList(props) {
  const { lista, loading } = props;

  return (
    <div className="ItemList">
      {loading ? (
        <p className="carga"> <SyncLoader color="#ffffff" /></p>
      ) : (
        lista.map((item, index) => (
          <Item
            key={index}
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




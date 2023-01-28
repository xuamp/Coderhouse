import "./ItemList.css";
import Item from "../Item/Item";

function ItemList(props) {
  const { lista } = props;

  return (
    <div className="ItemList">
      {lista.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          price={item.price}
          descripcion={item.descripcion}
          pictureUrl={item.pictureUrl}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default ItemList;

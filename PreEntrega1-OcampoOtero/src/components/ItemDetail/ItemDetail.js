import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail (props) {

  return (
    <div className="ItemDetail">
        <div>
         <img className='ImagenDetail' src='imagenes/rollo.jpg' alt='fot'></img>
        </div>
        <div>
            <p>Titulo</p>
            <p>Descripcion</p>
            <p>Precio</p>
            <ItemCount />
        </div>
    </div>
  );
}

export default ItemDetail;
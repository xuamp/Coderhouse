import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail (props) {

  const { aumento, contador, disminucion, anexion } = props

  return (
    <div className="ItemDetail">
        <div>
         <img className='ImagenDetail' src='imagenes/rollo.jpg' alt='fot'></img>
        </div>
        <div>
            <p>Titulo</p>
            <p>Descripcion</p>
            <p>Precio</p>
            <ItemCount numero={aumento} contador={contador} menos={disminucion} agregar={anexion} prueba={props.prueba}/>
        </div>
    </div>
  );
}

export default ItemDetail;
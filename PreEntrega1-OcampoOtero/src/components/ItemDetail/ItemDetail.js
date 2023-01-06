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
            <p className='tituloDetail'>Rollo de Papel Higienico</p>
            <div className='descripcionDetail'>
              <p>Excelente calidad, nada mejor que un buen sentir al momento de limpiarse el culo</p>
            </div>
            <p className='precioDetail'>$ 800</p>
            <ItemCount numero={aumento} contador={contador} menos={disminucion} agregar={anexion} prueba={props.prueba}/>
        </div>
    </div>
  );
}

export default ItemDetail;
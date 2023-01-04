import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';


function ItemList (props) {

    const [ lista, setLista ] = useState([])
    const [ impre, setImpre ]= useState ([])
    const [ loading, setLoading ] = useState(true)

    const productos = [{id: 1, title: "Rollo de cocina", descripcion: 'el mejor rollo de cocina', price: 15, pictureUrl: 'cocina.jpg'},
    {id: 2, title: "Papel higienico", descripcion: 'el mas suave de todos', price: 5, pictureUrl: 'rollo.jpg'},
    {id: 3, title: "Bandeja", descripcion: 'Bandeja de carton multiusos', price: 7.5, pictureUrl: 'bandeja.jpg'}]

    useEffect(() => {
        setTimeout(() => {
            llamado();
            setImpre( lista.map((item) => 
            <Item id={item.id} 
            price={item.price}
            descripcion={item.descripcion}
            pictureUrl={item.pictureUrl}
            title={item.title}/>))
            setLoading(false)
        }, 2000) 
        }, )

    function promesa () {
        return new Promise((resolve) => {
            resolve(productos)
        })
    }

    async function llamado () {
        const dato = await promesa();
        setLista(dato);
    }

  return (
    <div className="ItemList">
        {loading ? <p className='carga'> Cargando ...</p> : impre}
    </div>
  );
}

export default ItemList;
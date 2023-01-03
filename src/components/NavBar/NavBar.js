
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar( props ) {
  return (
    <div className="NavBar">
        <div className='imagen'>
            <img src='imagenes/logo.jpeg' alt='logo' />
        </div>
        <div className='Nav'>
            <ul>
                <div className='item-nav'>
                    <li><i className="fa-sharp fa-solid fa-house"></i></li><br />
                    <span>Inicio</span>
                </div>
                <div className='item-nav'>
                    <li><i className="fa-regular fa-envelope"></i></li><br />
                    <span>Contacto</span>
                </div>
                <div className='item-nav'>
                    <li><i className="fa-regular fa-lightbulb"></i></li><br />
                    <span>Productos</span>
                </div>
                <div className='item-carrito'>
                    <li><CartWidget numero='30' /></li>
                </div>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;

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
                    <li><i class="fa-sharp fa-solid fa-house"></i></li><br />
                    <span>Inicio</span>
                </div>
                <div className='item-nav'>
                    <li><i class="fa-regular fa-envelope"></i></li><br />
                    <span>Contacto</span>
                </div>
                <div className='item-nav'>
                    <li><i class="fa-regular fa-lightbulb"></i></li><br />
                    <span>Productos</span>
                </div>
                <div className='item-nav'>
                    <li><CartWidget /></li>
                </div>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;
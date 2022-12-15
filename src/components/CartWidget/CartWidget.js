import { Button } from 'react-bootstrap';
import './CartWidget.css';

function CartWidget( props ) {
  return (
    <div className="Carrito">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>25</p>
    </div>
  );
}

export default CartWidget;
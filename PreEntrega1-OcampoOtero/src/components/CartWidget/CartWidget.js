
import './CartWidget.css';

function CartWidget(props) {
const {numero} = props

  return (
    <div className="Carrito">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>{numero}</p>
    </div>
  );
}

export default CartWidget;
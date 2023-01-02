
import './CartWidget.css';

function CartWidget(props) {
const {numero} = props

  return (
    <div className="Carrito">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>{numero}</p>
    </div>
  );
}

export default CartWidget;
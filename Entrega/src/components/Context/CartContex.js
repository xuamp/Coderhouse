import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carro, setCarro] = useState([]);
  const [total, setTotal] = useState(0);
  const [cant, setCant] = useState(0);
  const [hayItems, setHayItems] = useState(false);

  function isInCart(id) {
    return carro.some((item) => item.id === id);
  }

  const addItem = (item, cantidad) => {
    const iden = item.id;
    if (isInCart(iden)) {
      const repetido = carro.find((item) => item.id === iden);
      repetido.quantity = repetido.quantity + cantidad;
      setCant(cant + cantidad);
      setTotal(total + item.price * cantidad);
    } else {
      const item2 = { ...item, quantity: cantidad };
      const auxiliar = [...carro, item2];
      setCarro(auxiliar);
      setCant(cant + cantidad);
      setTotal(total + item.price * cantidad);
      setHayItems(true);
    }
  };

  function removeItem(id) {
    const copia = carro.filter((item) => id !== item.id);
    setCarro(copia);
    carro.length === 1 ? setHayItems(false) : setHayItems(true);
  }

  function clear() {
    setCarro([]);
    setCant(0);
    setTotal(0);
    setHayItems(false);
  }

  const valor = {
    carro,
    total,
    cant,
    addItem,
    clear,
    removeItem,
    setCant,
    setTotal,
    hayItems,
  };

  return <Provider value={valor}>{children}</Provider>;
};
export default CartContext;

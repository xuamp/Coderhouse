import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CartContainer from "./components/CartContainer/CartContainer";
import Contacto from "./components/Contacto/Contacto";
import CartContext from "./components/Context/CartContex";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:numero" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;

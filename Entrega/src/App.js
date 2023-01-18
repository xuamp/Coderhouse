import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CartContainer from "./components/CartContainer/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

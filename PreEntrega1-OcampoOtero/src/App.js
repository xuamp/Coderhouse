
import './App.css';
import ItemListContainer from './components/itemListContainer.js/ItemListContainer.';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Este es un mensaje'/>
    </div>
  );
}

export default App;

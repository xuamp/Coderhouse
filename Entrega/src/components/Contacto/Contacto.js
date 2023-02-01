import "./Contacto.css";
import { useContext, useState } from "react";
import { contexto } from "../Context/CartContex";
import { ventasCollection } from "../../FiberbaseConfig";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

function Contacto(props) {
  const { carro, clear } = useContext(contexto);
  const [envio, setEnvio] = useState(true);

  function handleCompra() {
    const nombre = document.getElementById("nombre").value;
    const mail = document.getElementById("mail").value;
    const telefono = document.getElementById("telefono").value;

    const compra = {
      usuario: {
        nombre: nombre,
        email: mail,
        telefono: telefono,
      },
      carrito: carro,
      fecha: serverTimestamp(),
    };

    const pedido = addDoc(ventasCollection, compra);
    setEnvio(false);
    clear();

    pedido
      .then((resultado) => console.log(resultado))
      .catch((error) => console.log(error));
  }

  return (
    <div className="contenedor">
      {!envio ? (
        <div>
          <p className="encabe A">GRACIAS POR SU COMPRA!!</p>
        <Link to="/">
          <button className="buttonCart S"> Volver al inicio </button>
        </Link></div>
      ) : (
        <div className="formulario">
          <p className="encabe">INGRESE SUS DATOS</p>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            id="nombre" className="celda"
          ></input>
          <input type="email" placeholder="Email" id="mail" className="celda"></input>
          <input type="number" placeholder="Telefono" id="telefono" className="celda"></input>
          <button onClick={handleCompra} className="buttonCart S">Confirmar Compra</button>
        </div>
      )}
    </div>
  );
}

export default Contacto;

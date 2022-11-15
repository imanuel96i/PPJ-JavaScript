import './App.css';
import Mensaje from './Mensaje'
import { useState } from 'react';

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {
  // ! Aumenta el contador (renderiza el app de nuevo)
  const [contador, contadorActualizado] = useState(0)

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
      <strong>Contador: {contador}</strong>
      <br/>
      <button onClick={() => {
        contadorActualizado(contador + 1)
      }}>
        Incrementar contador
      </button>
    </div>
  );
}


export default App;

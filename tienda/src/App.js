import './App.css';
import Mensaje from './Mensaje'
import { useState } from 'react';

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {
  // ! Aumenta el contador (renderiza el app de nuevo)
  const [contador, contadorActualizado] = useState(0)

  const handleClick = () => {
    contadorActualizado(contador + 1)
  }

  const handleClickReset = () => {
    contadorActualizado(0)
  }
  //! Revisa si el contador es par o impar
  const parImpar = contador % 2 === 0

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
      <strong><p>Contador: {contador}</p></strong>
      <strong><p>{ parImpar ? 'Es par' : 'Es impar'}</p></strong>
      <button onClick={ handleClick }>
        Incrementar contador
      </button>
      <button onClick={ handleClickReset }>
        Reiniciar contador
      </button>
    </div>
  );
}


export default App;

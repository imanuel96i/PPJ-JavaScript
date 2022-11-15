import './App.css';
import Mensaje from './Mensaje'
import { useState } from 'react';

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {
  // ! Lo comentado abajo equivale a lo mismo que esta abajo
  // ! Esto es un contador actualizable 
  // ? const contador = useState(0)
  // ? const contadorValor = contador[0];
  // ? const contadorActualizado = contador[1];
  const [contador, contadorActualizado] = useState(0)

  setInterval(() => {
    contadorActualizado(contador + 1)
  },2000)

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
      <strong>Contador: {contador}</strong>
    </div>
  );
}


export default App;

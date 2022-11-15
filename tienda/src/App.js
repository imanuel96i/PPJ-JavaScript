import './App.css';
import Mensaje from './Mensaje'

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion/>
    </div>
  );
}

export default App;

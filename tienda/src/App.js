import './App.css';
import Mensaje from './Mensaje'

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje />
      <Descripcion/>
    </div>
  );
}

export default App;

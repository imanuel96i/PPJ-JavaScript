import './App.css';

const Mensaje = () => {
  return <h1>Hola Mundo</h1>
}

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

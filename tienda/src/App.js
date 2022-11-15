import './App.css';

const App = () => {
  const a = 2
  const b = 11

  return (
    <div className="App">
      <h1>Titulo de la aplicacion</h1>
      <strong>Estamos trabajando en ella</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>
    </div>
  );
}

export default App;
